import React from 'react';

interface AhgoraCheckboxProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  id?: string;
  disabled?: boolean;
  className?: string;
}

export function AhgoraCheckbox({ 
  checked, 
  onCheckedChange, 
  label, 
  id, 
  disabled,
  className = ''
}: AhgoraCheckboxProps) {
  return (
    <div 
      className={`flex items-center gap-2 cursor-pointer select-none group ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={() => !disabled && onCheckedChange(!checked)}
    >
      <div className="relative w-6 h-6 flex items-center justify-center shrink-0 transition-transform active:scale-95">
        {checked ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19ZM10 14.2002L7.40039 11.5996L6 13L10 17L18 9L16.5996 7.59961L10 14.2002Z" fill="var(--primary)"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="var(--foreground)"/>
          </svg>
        )}
      </div>
      
      {label && (
        <label 
          htmlFor={id} 
          className="font-['Open_Sans'] text-[14px] leading-[20px] text-foreground tracking-[0.105px] cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  );
}
