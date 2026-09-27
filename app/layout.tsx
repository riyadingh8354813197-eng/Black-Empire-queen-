import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BLACK EMPIRE - Riya",
  description: "I Built My Own Empire - Founder & CEO Queen Riya",
  verification: {
    google: "KZR2eha4SE9E8nORt3zSEdMieDGiZCe_a2p8noU8vHw",
  },
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
