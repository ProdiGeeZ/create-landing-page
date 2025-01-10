import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof buttonSizes;
}

const buttonVariants = {
    primary: "bg-primary text-white hover:bg-primary/90 dark:hover:bg-primary/80 active:bg-primary/80 dark:active:bg-primary/70 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    secondary: "bg-secondary text-white hover:bg-secondary/90 dark:hover:bg-secondary/80 active:bg-secondary/80 dark:active:bg-secondary/70 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    accent: "bg-accent text-white hover:bg-accent/90 dark:hover:bg-accent/80 active:bg-accent/80 dark:active:bg-accent/70 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    destructive: "bg-destructive text-white hover:bg-destructive/90 dark:hover:bg-destructive/80 active:bg-destructive/80 dark:active:bg-destructive/70 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    ghost: "bg-transparent hover:bg-accent/20 dark:hover:bg-accent/10 active:bg-accent/30 dark:active:bg-accent/20 text-foreground dark:text-white hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    outline: "border-2 border-primary text-primary dark:text-white hover:bg-primary/10 dark:hover:bg-primary/20 active:bg-primary/20 dark:active:bg-primary/30 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    link: "text-primary dark:text-white underline-offset-4 hover:underline active:text-primary/70 dark:active:text-white/60 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
};

const buttonSizes = {
    sm: "h-9 px-3 text-sm rounded-md",
    md: "h-10 px-4 py-2 rounded-lg",
    lg: "h-11 px-4 text-md rounded-lg",
};

const baseStyles = "select-none inline-flex items-center justify-center font-medium cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md active:shadow-sm dark:focus-visible:ring-offset-background";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    variant = "primary",
    size = "md",
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={cn(
                baseStyles,
                buttonVariants[variant],
                buttonSizes[size],
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

Button.displayName = "Button"; 