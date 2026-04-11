import React from 'react';
import { cn } from '../ui/utils';

export interface AhgoraButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 
    | 'primary' 
    | 'secondary' 
    | 'outline' 
    | 'ghost' 
    | 'destructive' 
    | 'destructive-outline'
    | 'destructive-secondary'
    | 'destructive-ghost'
    | 'warning'
    | 'warning-outline'
    | 'warning-secondary'
    | 'warning-ghost'
    | 'info'
    | 'info-outline'
    | 'info-secondary'
    | 'info-ghost'
    | 'success'
    | 'success-outline'
    | 'success-secondary'
    | 'success-ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const AhgoraButton = React.forwardRef<HTMLButtonElement, AhgoraButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    
    // Updated radius to use spacing-xxs (4px) as per Figma spec
    const baseStyles = "relative inline-flex items-center justify-center rounded-[var(--spacing-xxs)] font-semibold transition-all focus:outline-none disabled:cursor-not-allowed disabled:opacity-100";
    
    // Updated sizes to use spacing tokens matches Figma Spacing spec
    // Sm: Height 32px (pad Y: 4px/xxs, pad X: 12px/sm) - Extrapolated logic
    // Md: Height 40px (pad Y: 8px/xs, pad X: 16px/sm, gap: 8px/xs) - MATCHES FIGMA SPEC
    // Lg: Height 48px (pad Y: 12px/sm, pad X: 24px/lg) - Extrapolated logic
    
    const sizeStyles = {
      sm: "text-[12px] h-8 px-[var(--spacing-sm)] py-[var(--spacing-xxs)] gap-[var(--spacing-xxs)]", // px-12px, py-4px
      md: "text-[14px] leading-[24px] h-[40px] px-[var(--spacing-sm)] py-[var(--spacing-xs)] gap-[var(--spacing-xs)] tracking-[0.4px]", // px-16px, py-8px
      lg: "text-[16px] h-12 px-[var(--spacing-lg)] py-[var(--spacing-sm)] gap-[var(--spacing-sm)]", // px-24px, py-12px
    };

    const variants = {
      primary: cn(
        "bg-[#19d] text-[#f4f4f6] font-['Open_Sans']",
        "hover:bg-[#15addd]",
        "active:bg-[#0c6d9e]",
        "focus:ring-4 focus:ring-[#81cef5] focus:ring-offset-0",
        "disabled:bg-[#d5d5dc] disabled:text-[#58586b]"
      ),
      secondary: cn(
        "bg-[#42b6f0] text-[#2a2a33] font-['Open_Sans']",
        "hover:bg-[#68c0ed]",
        "active:bg-[#5bb5e6]",
        "focus:ring-4 focus:ring-[#bfe6fa] focus:ring-offset-0",
        "disabled:bg-[#d5d5dc] disabled:text-[#58586b]"
      ),
      outline: cn(
        "border-2 border-[#19d] text-[#19d] bg-transparent font-['Open_Sans']",
        "hover:bg-[#19d]/10",
        "active:bg-[#0c6d9e] active:text-[#f4f4f6] active:border-[#0c6d9e]",
        "focus:ring-4 focus:ring-[#81cef5]/50 focus:ring-offset-0",
        "disabled:border-[#b6b6c2] disabled:text-[#b6b6c2] disabled:bg-transparent"
      ),
      ghost: cn(
        "bg-transparent text-[#19d] font-['Open_Sans']",
        "hover:bg-slate-100",
        "active:bg-slate-200",
        "focus:ring-4 focus:ring-[#42b6f0] focus:ring-offset-0",
        "disabled:text-[#b6b6c2] disabled:bg-transparent"
      ),
      destructive: cn(
        "bg-[#dd1818] text-white font-['Open_Sans']",
        "hover:bg-[#c01515]",
        "active:bg-[#730707]",
        "focus:ring-4 focus:ring-[#f76464] focus:ring-offset-0",
        "disabled:bg-[#d5d5dc] disabled:text-[#78788f]"
      ),
      'destructive-outline': cn(
        "border-2 border-[#dd1818] text-[#dd1818] bg-transparent font-['Open_Sans']",
        "hover:bg-[#dd1818]/10",
        "active:bg-[#730707] active:text-white active:border-[#730707]",
        "focus:ring-4 focus:ring-[#f76464]/50 focus:ring-offset-0",
        "disabled:border-[#b6b6c2] disabled:text-[#b6b6c2] disabled:bg-transparent"
      ),
      'destructive-secondary': cn(
        "bg-[#f76464] text-[#2a2a33] font-['Open_Sans']",
        "hover:bg-[#e05050]",
        "active:bg-[#dd1818] active:text-white",
        "focus:ring-4 focus:ring-[#f76464] focus:ring-offset-0",
        "disabled:bg-[#d5d5dc] disabled:text-[#78788f]"
      ),
      'destructive-ghost': cn(
        "bg-transparent text-[#dd1818] font-['Open_Sans']",
        "hover:bg-[#dd1818]/10",
        "active:bg-[#dd1818]/20",
        "focus:ring-4 focus:ring-[#f76464] focus:ring-offset-0",
        "disabled:text-[#b6b6c2] disabled:bg-transparent"
      ),
      warning: cn(
        "bg-[#fb0] text-white font-['Open_Sans']",
        "hover:bg-[#e6a800]",
        "active:bg-[#754600]",
        "focus:ring-4 focus:ring-[#ffcc24] focus:ring-offset-0",
        "disabled:bg-[#d5d5dc] disabled:text-[#78788f]"
      ),
      'warning-outline': cn(
        "border-2 border-[#fb0] text-[#fb0] bg-transparent font-['Open_Sans']",
        "hover:bg-[#fb0]/10",
        "active:bg-[#754600] active:text-white active:border-[#754600]",
        "focus:ring-4 focus:ring-[#ffcc24]/50 focus:ring-offset-0",
        "disabled:border-[#b6b6c2] disabled:text-[#b6b6c2] disabled:bg-transparent"
      ),
      'warning-secondary': cn(
        "bg-[#ffcc24] text-[#2a2a33] font-['Open_Sans']",
        "hover:bg-[#f0c020]",
        "active:bg-[#fb0]", 
        "focus:ring-4 focus:ring-[#ffcc24] focus:ring-offset-0",
        "disabled:bg-[#d5d5dc] disabled:text-[#78788f]"
      ),
      'warning-ghost': cn(
        "bg-transparent text-[#fb0] font-['Open_Sans']",
        "hover:bg-[#fb0]/10",
        "active:bg-[#fb0]/20",
        "focus:ring-4 focus:ring-[#ffcc24] focus:ring-offset-0",
        "disabled:text-[#b6b6c2] disabled:bg-transparent"
      ),
      info: cn(
        "bg-[#16c] text-white font-['Open_Sans']",
        "hover:bg-[#135bb0]",
        "active:bg-[#051e3d]",
        "focus:ring-4 focus:ring-[#38e] focus:ring-offset-0",
        "disabled:bg-[#d5d5dc] disabled:text-[#78788f]"
      ),
      'info-outline': cn(
        "border-2 border-[#16c] text-[#16c] bg-transparent font-['Open_Sans']",
        "hover:bg-[#16c]/10",
        "active:bg-[#051e3d] active:text-white active:border-[#051e3d]",
        "focus:ring-4 focus:ring-[#38e]/50 focus:ring-offset-0",
        "disabled:border-[#b6b6c2] disabled:text-[#b6b6c2] disabled:bg-transparent"
      ),
      'info-secondary': cn(
        "bg-[#38e] text-[#2a2a33] font-['Open_Sans']",
        "hover:bg-[#2d7cd1]",
        "active:bg-[#16c] active:text-white", 
        "focus:ring-4 focus:ring-[#38e] focus:ring-offset-0",
        "disabled:bg-[#d5d5dc] disabled:text-[#78788f]"
      ),
      'info-ghost': cn(
        "bg-transparent text-[#16c] font-['Open_Sans']",
        "hover:bg-[#16c]/10",
        "active:bg-[#16c]/20",
        "focus:ring-4 focus:ring-[#38e] focus:ring-offset-0",
        "disabled:text-[#b6b6c2] disabled:bg-transparent"
      ),
      success: cn(
        "bg-[#19993a] text-white font-['Open_Sans']",
        "hover:bg-[#158030]",
        "active:bg-[#084f16]",
        "focus:ring-4 focus:ring-[#44dd56] focus:ring-offset-0",
        "disabled:bg-[#d5d5dc] disabled:text-[#78788f]"
      ),
      'success-outline': cn(
        "border-2 border-[#19993a] text-[#19993a] bg-transparent font-['Open_Sans']",
        "hover:bg-[#19993a]/10",
        "active:bg-[#084f16] active:text-white active:border-[#084f16]",
        "focus:ring-4 focus:ring-[#44dd56]/50 focus:ring-offset-0",
        "disabled:border-[#b6b6c2] disabled:text-[#b6b6c2] disabled:bg-transparent"
      ),
      'success-secondary': cn(
        "bg-[#44dd56] text-[#2a2a33] font-['Open_Sans']",
        "hover:bg-[#3cc24b]",
        "active:bg-[#19993a] active:text-white", 
        "focus:ring-4 focus:ring-[#44dd56] focus:ring-offset-0",
        "disabled:bg-[#d5d5dc] disabled:text-[#78788f]"
      ),
      'success-ghost': cn(
        "bg-transparent text-[#19993a] font-['Open_Sans']",
        "hover:bg-[#19993a]/10",
        "active:bg-[#19993a]/20",
        "focus:ring-4 focus:ring-[#44dd56] focus:ring-offset-0",
        "disabled:text-[#b6b6c2] disabled:bg-transparent"
      ),
    };

    // Spinner Color Logic
    const isOutline = variant === 'outline' || variant.endsWith('-outline');
    const spinnerClass = isOutline ? "text-[#3A3A45]" : "text-current";

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, sizeStyles[size], variants[variant], className)}
        {...props}
      >
        {isLoading && (
            <div className={cn("mr-2 animate-spin", spinnerClass)}>
                 <svg width="16" height="16" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Track */}
                    <path d="M8.5 16.5C12.9183 16.5 16.5 12.9183 16.5 8.5C16.5 4.08172 12.9183 0.5 8.5 0.5C4.08172 0.5 0.5 4.08172 0.5 8.5C0.5 12.9183 4.08172 16.5 8.5 16.5Z" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    {/* Spinner Line */}
                    <path d="M8.5 0.5C12.9183 0.5 16.5 4.08172 16.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  }
);

AhgoraButton.displayName = 'AhgoraButton';