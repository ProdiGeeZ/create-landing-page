'use client';

import { ReactNode } from 'react';

interface UIProviderProps {
    children: ReactNode;
    framework?: 'shadcn' | 'chakra' | 'tailwind' | 'magic';
}

export default function UIProvider({ children, framework = 'tailwind' }: UIProviderProps) {
    return <>{children}</>;
} 