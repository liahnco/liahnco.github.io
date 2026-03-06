import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Li Ahn - Beauty, Authenticated.',
  description: 'Building Africa\'s most trusted beauty distribution ecosystem combining skincare science, fragrance psychology and youth-powered retail networks.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
