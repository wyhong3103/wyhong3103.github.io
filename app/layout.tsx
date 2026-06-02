import type { Metadata, Viewport } from 'next'
import {
  Spectral,
  Fira_Mono,
  Playfair_Display,
  Work_Sans,
} from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import 'katex/dist/katex.min.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'wyhong3103',
  description: "wyhong3103's Portfolio Website",
}

const spectral = Spectral({
  variable: '--font-spectral',
  weight: ['200', '400', '700'],
  subsets: ['latin'],
})

const fira = Fira_Mono({
  variable: '--font-fira-mono',
  weight: ['400', '700'],
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair-display',
  weight: ['400', '700'],
  subsets: ['latin'],
})

const work = Work_Sans({
  variable: '--font-work-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spectral.variable} ${fira.variable} ${playfair.variable} ${work.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L1MNTVLVD7"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-L1MNTVLVD7');
          `}
        </script>
      </body>
    </html>
  )
}
