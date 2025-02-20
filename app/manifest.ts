import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WatGuide',
    short_name: 'WatGuide',
    description: 'Wat Phra Pathommachedi Ratcha Wora Maha Wihan Guide',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: 'wat-ja.jpg',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'wat-ja.jpg',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}