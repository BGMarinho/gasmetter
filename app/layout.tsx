import type { Metadata } from 'next'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Gasmetter | Because gas metters!',
  description: 'Manage costs and consume of gas.',
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
