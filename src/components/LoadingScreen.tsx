import React from 'react'

interface LoadingScreenProps {
  message?: string
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  message = "Loading..." 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center p-8 fade-in">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full gradient-purple flex items-center justify-center mx-auto mb-4 float">
            <span className="text-4xl">💒</span>
          </div>
          
          {/* Spinning Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gradient mb-4">Wedding Command Center</h1>
        
        {/* Loading Message */}
        <p className="text-lg text-white/80 mb-6">{message}</p>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-white/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        
        {/* Subtitle */}
        <p className="text-sm text-white/60 mt-6">
          Nigerian Wedding Operations Hub
        </p>
      </div>
    </div>
  )
}