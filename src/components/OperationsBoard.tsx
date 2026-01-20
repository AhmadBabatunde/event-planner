import React from 'react'

export const OperationsBoard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Event-day Operations</h1>
        <p className="text-gray-600">Real-time event timeline management and vendor coordination hub</p>
      </div>

      <div className="card">
        <div className="text-center py-16">
          <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">📅</span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Operations Board Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Master your event timeline with drag-and-drop scheduling, vendor coordination,
            and real-time updates that keep everyone synchronized.
          </p>

          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Sample Timeline</h4>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900 text-sm">Traditional Ceremony</div>
                    <div className="text-xs text-gray-600">10:00 AM - 12:00 PM</div>
                  </div>
                  <div className="text-xs text-green-600 font-medium">On Time</div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg border border-orange-200">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900 text-sm">Reception Setup</div>
                    <div className="text-xs text-gray-600">12:30 PM - 2:00 PM</div>
                  </div>
                  <div className="text-xs text-orange-600 font-medium">In Progress</div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-3"></div>
                  <div className="flex-1 text-left">
                    <div className="font-medium text-gray-900 text-sm">Wedding Reception</div>
                    <div className="text-xs text-gray-600">3:00 PM - 8:00 PM</div>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Pending</div>
                </div>
              </div>
            </div>
          </div>

          <button className="btn-primary">
            Create Event Timeline
          </button>
        </div>
      </div>
    </div>
  )
}
