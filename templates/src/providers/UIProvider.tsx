'use client';

import React, { ReactNode } from 'react';

interface UIProviderProps {
    children: ReactNode;
}

export default function UIProvider({ children }: UIProviderProps) {
    return <>{children}</>;
} 