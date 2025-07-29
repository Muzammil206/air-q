"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Brain, RefreshCw, ThumbsUp, ThumbsDown, TrendingUp, AlertTriangle } from "lucide-react"
import { useState } from "react"

export function AIInsights() {
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  return (
    <Card className="border-2 border-purple-500/30 shadow-xl bg-gradient-to-br from-purple-500/5 via-gray-800/90 to-blue-500/5 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl text-white">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            AI-Powered Insights for Abuja
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 ml-2">
              <Sparkles className="w-3 h-3 mr-1" />
              Live Analysis
            </Badge>
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:text-purple-200 bg-transparent"
          >
            <RefreshCw className={`w-4 h-4 mr-1 ${isRefreshing ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Analysis */}
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-5 border border-gray-600">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-white mb-3">Current Analysis for Maitama District, Abuja</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Based on the latest satellite data analysis,{" "}
                <strong className="text-purple-300">NO₂ concentrations</strong> across Abuja's central districts show
                moderate levels with an <strong className="text-green-300">8% improvement</strong> compared to last
                month. The readings indicate stable air quality patterns, particularly in government quarters like
                Maitama and Asokoro.
              </p>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-blue-300">Harmattan season patterns</strong> are currently influencing air
                quality with dust particles from the Sahara mixing with local emissions. Wind speeds of 8 km/h from the
                southwest are helping disperse pollutants across the FCT. We recommend outdoor activities during early
                morning hours (6-8 AM) when concentrations are typically lowest.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <h4 className="font-semibold text-green-300">Positive Trends</h4>
            </div>
            <ul className="text-sm text-green-200 space-y-1">
              <li>• 8% improvement across FCT</li>
              <li>• Maitama shows best air quality</li>
              <li>• Weekend pollution drops by 25%</li>
            </ul>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <h4 className="font-semibold text-amber-300">Watch Areas</h4>
            </div>
            <ul className="text-sm text-amber-200 space-y-1">
              <li>• Kubwa industrial area peaks</li>
              <li>• Rush hours: 7-9 AM, 5-7 PM</li>
              <li>• Harmattan dust influence</li>
            </ul>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-4 h-4 text-blue-400" />
              <h4 className="font-semibold text-blue-300">Predictions</h4>
            </div>
            <ul className="text-sm text-blue-200 space-y-1">
              <li>• Quality to improve by 12% tomorrow</li>
              <li>• Harmattan winds clearing dust</li>
              <li>• Weekend conditions favorable</li>
            </ul>
          </div>
        </div>

        {/* Health Recommendations */}
        <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-xl p-4 border border-gray-600">
          <h4 className="font-semibold text-white mb-3">Health Recommendations for Abuja Residents</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-green-300 mb-2">✓ Safe Activities</h5>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Outdoor exercise in Millennium Park</li>
                <li>• Walking in Maitama/Asokoro areas</li>
                <li>• Children's play in residential areas</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-amber-300 mb-2">⚠ Precautions</h5>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Avoid Kubwa during peak hours</li>
                <li>• Consider masks during Harmattan</li>
                <li>• Monitor FCT air quality alerts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400">Was this analysis helpful?</p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-green-500/30 text-green-300 hover:bg-green-500/10 hover:text-green-200 bg-transparent"
            >
              <ThumbsUp className="w-4 h-4 mr-1" />
              Yes
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-red-500/30 text-red-300 hover:bg-red-500/10 hover:text-red-200 bg-transparent"
            >
              <ThumbsDown className="w-4 h-4 mr-1" />
              No
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
