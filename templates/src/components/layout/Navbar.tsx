import React from 'react';
import Link from 'next/link';
import { NavItem } from '@/types';

interface NavbarProps {
    items?: NavItem[];
}

export default function Navbar({ items = [] }: NavbarProps) {
    return (
        <header className="w-full border-b">
            {/* ... rest of the component */}
        </header>
    );
} 