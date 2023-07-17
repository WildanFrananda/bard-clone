import React from "react"
import { Inter } from "next/font/google"
import Navbar from "@components/Navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ChatGPT Clone",
  description: "Create and Share AI Powered Prompt",
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <React.StrictMode>
          <Navbar />
          {children}
        </React.StrictMode>
      </body>
    </html>
  )
}

export default RootLayout