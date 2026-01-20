import React from 'react'

export const GuestManagement: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center fade-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-blue mb-4 float">
          <span className="text-2xl">👥</span>
        </div>
        <h1 className="text-4xl font-bold text-gradient mb-3">Guest Management</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Manage invitations, RSVPs, and check-ins with QR code technology
        </p>
      </div>

      {/* Coming Soon Card */}
      <div className="card scale-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-center py-16">
          <div className="relative mb-8">
            <div className="w-32 h-32 rounded-full gradient-blue flex items-center justify-center mx-auto float">
              <span className="text-6xl">👥</span>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-pink-400 opacity-60 pulse"></div>
            <div className="absolute -bottom-2 -left-6 w-6 h-6 rounded-full bg-yellow-400 opacity-60 pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-8 -left-8 w-4 h-4 rounded-full bg-green-400 opacity-60 pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Guest Management Coming Soon</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
            This powerful section will handle digital invitations with QR codes, RSVP tracking, 
            zone assignments, and real-time check-ins to prevent gate crashers.
          </p>
          
          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center p-4 bg-white/50 rounded-xl">
              <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center mr-3">
                <span className="text-white text-sm">📱</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">QR Code Invitations</div>
                <div className="text-sm text-gray-600">WhatsApp & SMS delivery</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white/50 rounded-xl">
              <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center mr-3">
                <span className="text-white text-sm">✅</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Smart Check-ins</div>
                <div className="text-sm text-gray-600">Prevent uninvited guests</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white/50 rounded-xl">
              <div className="w-10 h-10 rounded-lg gradient-orange flex items-center justify-center mr-3">
                <span className="text-white text-sm">🎯</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Zone Management</div>
                <div className="text-sm text-gray-600">VIP, Family, Corporate</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-white/50 rounded-xl">
              <div className="w-10 h-10 rounded-lg gradient-pink flex items-center justify-center mr-3">
                <span className="text-white text-sm">📊</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Real-time RSVP</div>
                <div className="text-sm text-gray-600">Live guest tracking</div>
              </div>
            </div>
          </div>
          
          <button className="btn-primary text-lg px-8 py-4">
            <span className="mr-2">🚀</span>
            Add Your First Guest
          </button>
        </div>
      </div>
    </div>
  )
}