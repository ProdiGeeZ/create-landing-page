'use client';

import Link from "next/link";
import { Button } from "../ui/Button";

export function HeroButtons() {
    return (
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="#features">
                <Button
                    size="lg"
                    className="w-full sm:w-auto"
                >
                    Get Started Free
                </Button>
            </Link>
            <Link href="#how-it-works">
                <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                >
                    See How It Works
                </Button>
            </Link>
        </div>
    );
} 