import '../../../ui/globals.css'
import { Metadata, Viewport } from "next"
import { siteConfig } from "../../../config/software"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/providers"

import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Toaster as DefaultToaster } from "@/components/ui/toaster"
import { Toaster as NewYorkSonner } from "@/components/ui/sonner"
import { Toaster as NewYorkToaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
  creator: "shadcn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">

                <main className="flex-1">{children}</main>

              </div>
            </div>
            <TailwindIndicator />
            <ThemeSwitcher />

            <NewYorkToaster />
            <DefaultToaster />
            <NewYorkSonner />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}


// import type { Metadata } from 'next'
// import '../../../ui/globals.css'
// import { Redux } from './redux'
// import { Antdesign } from './antdesign'
// import { Nextui } from './nextui'
// import GlobalLayout from '@/components/global-layout'

// export const metadata: Metadata = {
//   title: 'Dx',
//   description: 'Flawless Developing Expreience',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Redux>
//           <Antdesign>
//             <Nextui>
//               {/* <GlobalLayout /> */}
//               <main>
//                 {children}
//               </main>
//             </Nextui>
//           </Antdesign>
//         </Redux>
//       </body>
//     </html>
//   )
// }
