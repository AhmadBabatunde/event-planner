import React from 'react'

interface LoadingScreenProps {
  message?: string
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  message = "Loading..."
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 fade-in">
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-full gradient-purple flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl text-white">💒</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">Wedding Command Center</h1>

        <p className="text-lg text-gray-600 mb-6">{message}</p>

        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Nigerian Wedding Operations Hub
        </p>
      </div>
    </div>
  )
}
