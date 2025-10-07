'use client';

import './globals.css';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import TopNav from '@/components/site/TopNav';
import DropdownNudge from '@/components/ui/DropdownNudge';

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/2fsf/ads/admin');

  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased bg-white text-gray-900">
        {!isAdminRoute && <TopNav />}
        {children}
        {!isAdminRoute && <DropdownNudge />}
      </body>
    </html>
  );
}
