import './globals.css';
import type { ReactNode } from 'react';
import TopNav from '@/components/site/TopNav';
import DropdownNudge from '@/components/ui/DropdownNudge';

export const metadata = {
  title: "Loyano | Home",
  description: "Wearables frontend home app"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased bg-white text-gray-900">
        <TopNav />
        {children}
        <DropdownNudge />
      </body>
    </html>
  );
}
