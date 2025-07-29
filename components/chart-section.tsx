"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Download, Share2, BarChart3 } from "lucide-react"

export function ChartSection() {
  return (
    <Card className="border-2 border-blue-100 shadow-xl bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            Concentration Over Time
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
            >
              <BarChart3 className="w-4 h-4 mr-1" />
              Chart Type
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
            >
              <Download className="w-4 h-4 mr-1" />
              Export
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-80 bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-xl flex items-center justify-center relative overflow-hidden group border border-blue-100">
          {/* Simulated chart lines */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <path
                d="M 50 150 Q 100 100 150 120 T 250 80 T 350 100"
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M 50 160 Q 100 110 150 130 T 250 90 T 350 110"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
                className="animate-pulse delay-500"
              />
            </svg>
          </div>

          <div className="text-center z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <p className="text-gray-700 font-semibold text-lg mb-2">Time Series Analysis</p>
            <p className="text-gray-500 mb-4">Historical concentration trends</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Load Chart Data</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
