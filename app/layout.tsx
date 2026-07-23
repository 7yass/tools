import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'tools.brazy.xyz',
  description: 'roadmaps, mastermaps, and project tools — brazy ecosystem',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22><rect width=%2232%22 height=%2232%22 rx=%224%22 fill=%22%230a0a09%22/><text x=%2250%25%22 y=%2257%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2220%22>⚡</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  var t = document.documentElement;
                  var d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
                  t.setAttribute('data-theme', d);
                } catch(e) {}
              })()
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
