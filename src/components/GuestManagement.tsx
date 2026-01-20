import React from 'react'

export const GuestManagement: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Registrations</h1>
        <p className="text-gray-600">Manage invitations, RSVPs, and check-ins with QR code technology</p>
      </div>

      <div className="card">
        <div className="text-center py-16">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">👥</span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Management Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            This section will handle digital invitations with QR codes, RSVP tracking,
            zone assignments, and real-time check-ins to prevent gate crashers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-lg">📱</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">QR Code Invitations</div>
                <div className="text-xs text-gray-600">WhatsApp & SMS delivery</div>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-3">
                <span className="text-lg">✅</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Smart Check-ins</div>
                <div className="text-xs text-gray-600">Prevent uninvited guests</div>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center mr-3">
                <span className="text-lg">🎯</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Zone Management</div>
                <div className="text-xs text-gray-600">VIP, Family, Corporate</div>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center mr-3">
                <span className="text-lg">📊</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Real-time RSVP</div>
                <div className="text-xs text-gray-600">Live guest tracking</div>
              </div>
            </div>
          </div>

          <button className="btn-primary">
            Add Your First Guest
          </button>
        </div>
      </div>
    </div>
  )
}
