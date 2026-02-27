// app/payment/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pembayaran – Stouch Pay',
  description: 'Halaman pembayaran aman via Midtrans',
  robots: { index: false, follow: false },
}

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}