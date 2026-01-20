import React from 'react'

export const OperationsBoard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-orange mb-4 float">
          <span className="text-2xl">⚡</span>
        </div>
        <h1 className="text-4xl font-bold text-gradient mb-3">Operations Board</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real-time event timeline management and vendor coordination hub
        </p>
      </div>

      {/* Coming Soon Card */}
      <div className="card scale-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-center py-16">
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full gradient-orange flex items-center justify-center mx-auto float">
              <span className="text-6xl">⚡</span>
            </div>
            
            {/* Animated rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-2 border-orange-300/30 rounded-full animate-ping"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-orange-200/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Operations Board Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            Master your event timeline with drag-and-drop scheduling, vendor coordination, 
            and real-time updates that keep everyone synchronized.
          </p>
          
          {/* Timeline Preview */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white/50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Sample Timeline</h4>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900">Traditional Ceremony</div>
                    <div className="text-sm text-gray-600">10:00 AM - 12:00 PM</div>
                  </div>
                  <div className="text-sm text-purple-600 font-medium">On Time</div>
                </div>
                
                <div className="flex items-center p-3 bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 pulse"></div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900">Reception Setup</div>
                    <div className="text-sm text-gray-600">12:30 PM - 2:00 PM</div>
                  </div>
                  <div className="text-sm text-orange-600 font-medium">In Progress</div>
                </div>
                
                <div className="flex items-center p-3 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900">Wedding Reception</div>
                    <div className="text-sm text-gray-600">3:00 PM - 8:00 PM</div>
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Pending</div>
                </div>
              </div>
            </div>
          </div>
          
          <button className="btn-primary text-lg px-8 py-4">
            <span className="mr-2">📅</span>
            Create Event Timeline
          </button>
        </div>
      </div>
    </div>
  )
}