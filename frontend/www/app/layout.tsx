import type { Metadata } from 'next'
import '@/ui/globals.css'
import { Redux } from './redux'
import { Antdesign } from './antdesign'
import { Nextui } from './nextui'

export const metadata: Metadata = {
  title: 'Dx',
  description: 'Flawless Developer Expreience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Redux>
          <Antdesign>
            <Nextui>
              {children}
            </Nextui>
          </Antdesign>
        </Redux>
      </body>
    </html>
  )
}
