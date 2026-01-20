# Wedding Command Center

A high-reliability, mobile-first operations hub designed for Nigerian wedding planners. This Progressive Web Application (PWA) helps move planners away from fragmented WhatsApp groups and printed guest lists to a unified digital platform.

## Features

- **Guest Management**: Digital invitations with QR codes, RSVP tracking, and check-in system
- **Operations Board**: Real-time event timeline management and vendor coordination
- **Vendor Accountability**: Task tracking and service verification system
- **Media Hub**: Photo sharing and content curation for guests
- **Offline-First**: Full functionality even without internet connection

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **PWA**: Service Workers for offline functionality
- **Storage**: IndexedDB for local data persistence
- **Styling**: Mobile-first CSS with responsive design
- **QR Codes**: QR code generation and scanning capabilities

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
├── hooks/              # Custom React hooks
├── services/           # Business logic and data services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── main.tsx           # Application entry point

public/
├── sw.js              # Service Worker
├── manifest.json      # PWA manifest
└── icons/             # App icons
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

### PWA Features

The app is configured as a Progressive Web App with:

- Offline functionality via Service Worker
- App-like installation on mobile devices
- Background sync for offline data
- Push notifications (when implemented)

### Database

The app uses IndexedDB for local storage with the following stores:

- `events` - Wedding event information
- `guests` - Guest lists and check-in data
- `vendors` - Vendor information and tasks
- `timeline` - Event timeline and schedules
- `media` - Photo and media content
- `syncQueue` - Offline sync queue

## Nigerian Market Adaptations

- SMS integration with local providers (Termii, Bulk SMS Nigeria)
- WhatsApp Business API for invitation delivery
- Optimized for 3G/4G network conditions
- Touch-optimized interface for mobile devices
- Offline-first architecture for unreliable connections

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is proprietary software for Nigerian wedding planning operations.