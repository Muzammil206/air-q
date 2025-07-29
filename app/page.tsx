"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wind, Satellite, BarChart3, Brain, ArrowRight, Play, CheckCircle } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Satellite,
    title: "Satellite Data",
    description: "Real-time data from Sentinel-5P satellite constellation monitoring Abuja",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive charts and trend analysis for Nigeria's capital",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Machine learning powered air quality predictions for Abuja region",
    color: "from-purple-500 to-pink-500",
  },
]

const stats = [
  { label: "Abuja Districts", value: "6" },
  { label: "Data Points Daily", value: "2.5M+" },
  { label: "Accuracy Rate", value: "99.2%" },
  { label: "Coverage Area", value: "713km²" },
]

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                <Wind className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
                  AirSense
                </span>
                <div className="text-xs text-gray-400 -mt-1">Abuja Air Quality</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                About
              </Button>
              <Button variant="ghost" className="text-gray-300 hover:text-blue-400 hover:bg-gray-800">
                Features
              </Button>
              <Button
                variant="outline"
                className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 bg-transparent"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-6 px-4 py-2">
              <Satellite className="w-4 h-4 mr-2" />
              Monitoring Nigeria's Capital City
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Abuja Air Quality
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-green-400 bg-clip-text text-transparent">
                Real-Time
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Track air pollution across Abuja's six districts with precision satellite data, advanced analytics, and
              AI-powered insights for Nigeria's Federal Capital Territory.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Monitor Abuja Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 rounded-xl text-lg bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Monitoring for
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"> Abuja</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge technology to understand air quality patterns across Nigeria's Federal Capital
              Territory and make data-driven decisions for healthier communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl group bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Monitor
                <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  {" "}
                  Abuja's Air?
                </span>
              </h2>

              <div className="space-y-6">
                {[
                  "Real-time satellite data covering all six area councils",
                  "AI-powered insights for Nigeria's growing capital",
                  "Track pollution from Maitama to Gwagwalada districts",
                  "Historical data analysis and seasonal trend tracking",
                  "Health impact assessments for 3.5M+ residents",
                  "Export capabilities for research and policy making",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-3xl flex items-center justify-center relative overflow-hidden border border-gray-700">
                {/* Animated elements representing Abuja districts */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-8 left-8 w-4 h-4 bg-blue-400 rounded-full animate-ping" />
                  <div className="absolute top-16 right-12 w-3 h-3 bg-green-400 rounded-full animate-ping delay-500" />
                  <div className="absolute bottom-12 left-1/3 w-3 h-3 bg-teal-400 rounded-full animate-ping delay-1000" />
                  <div className="absolute bottom-8 right-8 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-1500" />
                </div>

                <div className="text-center z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <Satellite className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-white font-semibold text-xl">Abuja Coverage</p>
                  <p className="text-gray-400">6 Districts • 24/7 Monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Monitor Abuja?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join researchers, policymakers, and environmental advocates using AirSense to track air quality across
            Nigeria's Federal Capital Territory.
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-12 py-4 bg-white text-blue-600 hover:bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
            >
              Launch Abuja Dashboard
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Wind className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AirSense Abuja</span>
            </div>
            <p className="text-gray-400">© 2024 AirSense. Monitoring Nigeria's Capital.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
