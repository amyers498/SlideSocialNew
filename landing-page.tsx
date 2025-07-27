"use client"

import Link from "next/link"
import { Twitter, Instagram, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showLetter, setShowLetter] = useState(false)

  useEffect(() => {
    // Smoother loading sequence
    const timer1 = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    const timer2 = setTimeout(() => {
      setShowContent(true)
    }, 2200)

    const timer3 = setTimeout(() => {
      setShowLetter(true)
    }, 2800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 flex items-center justify-center z-50">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Loading logo with smoother animations */}
        <div className="relative z-10">
          <div className="animate-logo-entrance">
            <img
              src="/slide-social-logo.png"
              alt="Slide Social Logo"
              className="w-40 h-40 object-contain drop-shadow-2xl animate-logo-glow"
            />
          </div>

          {/* Smoother loading animation */}
          <div className="flex justify-center mt-8">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full animate-loading-dot"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-bg-1"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float-bg-2"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl animate-pulse-gentle"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-2xl animate-pulse-gentle-delayed"></div>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main container with smoother entrance */}
      <div
        className={`max-w-5xl mx-auto py-12 px-6 relative z-10 transition-all duration-1000 ease-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-7xl font-bold font-sans mb-12 tracking-tight bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-title-shimmer">
            Slide Social
          </h1>

          {/* Logo with enhanced hover effects */}
          <div className="flex justify-center mb-16">
            <div className="relative group cursor-pointer">
              <img
                src="/slide-social-logo.png"
                alt="Slide Social Logo"
                className="w-56 h-56 object-contain drop-shadow-2xl transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-6 animate-logo-float"
              />
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 scale-150"></div>
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl opacity-50 animate-pulse-glow -z-20"></div>
            </div>
          </div>
        </header>

        {/* Letter Section - Paper Style */}
        <main className="mb-20 flex justify-center">
          <div
            className={`relative max-w-4xl transition-all duration-1000 ease-out ${
              showLetter ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 rotate-1"
            }`}
          >
            {/* Paper background with realistic styling */}
            <div className="relative bg-gradient-to-br from-amber-50 to-yellow-50 p-12 rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Paper texture overlay */}
              <div className="absolute inset-0 bg-paper-texture opacity-30 rounded-lg"></div>

              {/* Paper shadow */}
              <div className="absolute -inset-2 bg-gray-800/20 rounded-lg blur-sm -z-10"></div>

              {/* Subtle paper lines */}
              <div className="absolute left-12 top-0 bottom-0 w-px bg-red-300/30"></div>

              {/* Letter content */}
              <div className="relative z-10 text-gray-800 font-serif leading-relaxed space-y-6 text-lg">
                <p className="text-center italic text-gray-600 mb-8 font-handwriting text-xl">
                  To the ones looking for something real,
                </p>

                <p className="animate-typewriter-1 hover:text-gray-900 transition-colors duration-300">
                  In a world overflowing with notifications, filters, and quick reactions, something essential has been
                  lost—real connection.
                </p>

                <p className="animate-typewriter-2 hover:text-gray-900 transition-colors duration-300">
                  At Slide Social, we've been building quietly—something different. Something that doesn't fight for
                  your attention but instead respects your time. A platform built with psychology, design, and intention
                  at its core.
                </p>

                <p className="animate-typewriter-3 hover:text-gray-900 transition-colors duration-300">
                  Slide Social isn't about keeping you online. It's about helping you meet someone—down the street,
                  across the hall, or around the corner. Whether you're solo or with a group, Slide connects you with
                  others in the moment—then gives you a place to meet in real life.
                </p>

                <p className="animate-typewriter-4 hover:text-gray-900 transition-colors duration-300">
                  We'll be launching late 2025. Until then, we're building the right way: intentionally, quietly, and
                  with real people in mind.
                </p>

                <p className="animate-typewriter-5 hover:text-gray-900 transition-colors duration-300">
                  No big announcements yet. Just a quiet reminder that something more meaningful is on the way.
                </p>

                <p className="text-center mt-8 animate-typewriter-6 text-2xl font-medium font-handwriting">
                  Stay close.
                </p>

                <p className="text-center text-gray-500 italic animate-typewriter-7 font-handwriting text-xl">
                  – Team at Slide Social
                </p>
              </div>

              {/* Paper corner fold effect */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-amber-100 to-yellow-100 transform rotate-45 shadow-lg"></div>
            </div>
          </div>
        </main>

        {/* Enhanced Footer Section */}
        <footer className="border-t border-gray-700/50 pt-12 animate-fade-in-smooth">
          <div className="flex justify-center space-x-12">
            {/* Enhanced Social Media Links */}
            {[
              { icon: Twitter, label: "Twitter", color: "hover:text-blue-400" },
              { icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
              { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500" },
            ].map(({ icon: Icon, label, color }, index) => (
              <Link
                key={label}
                href="#"
                className={`flex items-center space-x-3 text-gray-300 ${color} transition-all duration-500 hover:scale-125 hover:-translate-y-2 group animate-social-entrance`}
                style={{ animationDelay: `${index * 0.2}s` }}
                aria-label={`Follow us on ${label}`}
              >
                <Icon className="h-6 w-6 group-hover:animate-wiggle" />
                <span className="text-lg font-medium">{label}</span>
                <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10"></div>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
