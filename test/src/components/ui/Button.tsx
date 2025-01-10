import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof buttonVariants;
    size?: keyof typeof buttonSizes;
}

const buttonVariants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    success: "bg-success text-success-foreground hover:bg-success/90 active:bg-success/80 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    warning: "bg-warning text-warning-foreground hover:bg-warning/90 active:bg-warning/80 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    ghost: "bg-transparent hover:bg-accent/20 active:bg-accent/30 text-foreground hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    outline: "border-2 border-primary text-primary hover:bg-primary/10 active:bg-primary/20 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
    link: "text-primary underline-offset-4 hover:underline active:text-primary/70 hover:scale-[1.02] active:scale-[0.98] transform transition-all duration-200",
};

const buttonSizes = {
    sm: "h-9 px-3 text-sm rounded-md",
    md: "h-10 px-4 py-2 rounded-lg",
    lg: "h-11 px-4 text-md rounded-lg",
};

const baseStyles = "select-none inline-flex items-center justify-center font-medium cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md active:shadow-sm";

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