import type { Metadata } from 'next'
import '../../../ui/globals.css'
import { Redux } from './redux'
import { Antdesign } from './antdesign'
import { Nextui } from './nextui'
import GlobalLayout from '@/components/global-layout'

export const metadata: Metadata = {
  title: 'Dx',
  description: 'Flawless Developing Expreience',
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
              {/* <GlobalLayout /> */}
              <main>
                {children}
              </main>
            </Nextui>
          </Antdesign>
        </Redux>
      </body>
    </html>
  )
}
