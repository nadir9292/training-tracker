import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Training Tracker',
    short_name: 'TTracker',
    description:
      'Training tracker is an application that helps athletes with their training. ',
    start_url: '/',
    display: 'standalone',
    background_color: '#26757a',
    theme_color: '#26757a',
    icons: [
      {
        src: '/logo-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
