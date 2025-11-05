import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Digital Marketing Success - Build Your Online Income',
  description: 'Generate consistent online income through Digital Marketing - Brand Promotions, Affiliate Campaigns, and Client Marketing Services',
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
