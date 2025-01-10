import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/lib/utils';
import { AnimatedGradient } from '@/components/AnimatedGradient';
import { defaultTheme, defaultMode } from '@/config/themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '@ProdiGeeZ Landing Page CLI',
  description: 'One command to generate your landing page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <ThemeProvider theme={defaultTheme} mode={defaultMode}>
          <AnimatedGradient />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}