import UIProvider from '@/providers/UIProvider';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UIProvider>
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
