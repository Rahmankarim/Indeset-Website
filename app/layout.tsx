import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Indeset - Boundaries are set to inspire",
  description:
    "Leading software development company specializing in custom software, SaaS products, AI solutions, and cutting-edge technology.",
  keywords: "software development, SaaS, AI, custom software, mobile apps, web development",
  authors: [{ name: "Indeset" }],
  openGraph: {
    title: "Indeset - Boundaries are set to inspire",
    description:
      "Leading software development company specializing in custom software, SaaS products, AI solutions, and cutting-edge technology.",
    url: "https://indeset.com",
    siteName: "Indeset",
    images: [
      {
        url: "/indeset.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indeset - Boundaries are set to inspire",
    description:
      "Leading software development company specializing in custom software, SaaS products, AI solutions, and cutting-edge technology.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
