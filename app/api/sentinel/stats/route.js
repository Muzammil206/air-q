export async function POST(req) {
  // Clone the request to avoid "body already read" error
  const reqClone = req.clone();
  
  let body = {};
  try {
    const contentType = req.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      body = await reqClone.json();
    }
  } catch (error) {
    console.log('Using default parameters');
  }

  const CLIENT_ID = process.env.SENTINEL_CLIENT_ID;
  const CLIENT_SECRET = process.env.SENTINEL_CLIENT_SECRET;

  try {
    // Get access token
    const tokenRes = await fetch('https://services.sentinel-hub.com/oauth/token', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    });

    // Handle token response
    const tokenText = await tokenRes.text();
    if (!tokenRes.ok) {
      throw new Error(`Token request failed: ${tokenRes.status} - ${tokenText}`);
    }
    const tokenData = JSON.parse(tokenText);
    const accessToken = tokenData.access_token;

    // Prepare evalscript
    const evalscript = `//VERSION=3
function setup() {
  return {
    input: ["NO2_column_number_density"],
    output: { bands: 1, sampleType: "FLOAT32" }
  };
}
function evaluatePixel(sample) {
  return [sample.NO2_column_number_density];
}`;

    // Prepare statistics request for Sentinel-5P
    const statsPayload = {
      input: {
        bounds: {
          bbox: body.bbox || [6.5244, 3.3792, 6.5245, 3.3793],
          properties: {
            crs: 'http://www.opengis.net/def/crs/EPSG/0/4326',
          },
        },
        data: [{
          type: 'sentinel-5p-l2',
          dataFilter: {
            timeRange: {
              from: body.from || '2024-07-01T00:00:00Z',
              to: body.to || '2024-07-02T00:00:00Z',
            }
          }
        }]
      },
      aggregation: {
        timeRange: {
          from: body.from || '2024-07-01T00:00:00Z',
          to: body.to || '2024-07-02T00:00:00Z',
        },
        aggregationInterval: {
          of: 'P1D',
        },
        evalscript: evalscript,
        resx: 0.001,
        resy: 0.001,
      },
      calculations: {
        default: {
          statistics: {
            min: {},
            max: {},
            mean: {},
            stdev: {}
          },
          histograms: {
            default: {
              nBins: 10
            }
          }
        }
      }
    };

    console.log("Sending payload to Sentinel Hub:", JSON.stringify(statsPayload, null, 2));

    // Call the CORRECT Statistical API endpoint for Sentinel-5P
    const statsRes = await fetch('https://creodias.sentinel-hub.com/api/v1/statistics', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(statsPayload),
    });

    // Handle statistics response
    const statsText = await statsRes.text();
    if (!statsRes.ok) {
      throw new Error(`Statistics request failed: ${statsRes.status} - ${statsText}`);
    }
    const statsData = JSON.parse(statsText);

    return new Response(JSON.stringify(statsData), {
      status: 200,
      headers: {'Content-Type': 'application/json'},
    });
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal Server Error',
        details: error.message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
      }),
      { status: 500 }
    );
  }
}