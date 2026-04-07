import React, { forwardRef } from 'react';
import { cn } from '../ui/utils';

export interface AhgoraInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  info?: string;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  error?: boolean;
  containerClassName?: string;
  multiline?: boolean;
}

const AhgoraInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, AhgoraInputProps>(
  ({ label, required, info, helperText, startIcon, endIcon, error, className, containerClassName, multiline, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-[8px] items-start relative w-full", containerClassName)}>
        {/* Label Row */}
        {(label || info) && (
          <div className="flex gap-[4px] min-h-[18px] items-center justify-between w-full">
            <div className="flex flex-1 items-center">
              {label && (
                <div className="flex items-center">
                  <span className="font-semibold text-[#58586b] text-[14px] leading-[18px] tracking-[0.1246px]">
                    {label}
                  </span>
                  {required && (
                    <span className="font-semibold text-[#58586b] text-[14px] leading-[18px] ml-1">
                      *
                    </span>
                  )}
                </div>
              )}
            </div>
            {info && (
              <div className="flex items-center">
                <span className="font-semibold text-[#58586b] text-[14px] leading-[18px] tracking-[0.1246px]">
                  {info}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Input Container */}
        <div 
          onClick={(e) => {
            const input = e.currentTarget.querySelector('input, textarea') as HTMLInputElement | HTMLTextAreaElement;
            if (input) {
               if (document.activeElement !== input) input.focus();
               
               // Open native picker for date/time types for "app-like" feel
               if (input instanceof HTMLInputElement && 
                  (input.type === 'date' || input.type === 'time' || input.type === 'datetime-local') && 
                  'showPicker' in input) {
                 try {
                   input.showPicker();
                 } catch (err) {
                   // Fallback for browsers ensuring non-blocking behavior
                 }
               }
            }
          }}
          className={cn(
            "flex items-center w-full rounded-[4px] bg-white border border-[#78788f] px-[16px] transition-colors overflow-hidden cursor-text",
            multiline ? "items-start py-[12px] min-h-[100px]" : "min-h-[48px]",
            "focus-within:border-primary", // Primary color
            error && "border-[#dd1818] focus-within:border-[#dd1818]", // Destructive color
            className
          )}
        >
          {startIcon && (
            <div className={cn("mr-[8px] shrink-0 text-[#3A3A45] pointer-events-none", multiline && "mt-[2px]")}>
              {startIcon}
            </div>
          )}
          
          {multiline ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={cn(
                "flex-1 bg-transparent border-none outline-none text-[14px] text-[#58586b] placeholder:text-[#78788f] w-full font-regular tracking-[0.105px] resize-none",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              className={cn(
                "flex-1 bg-transparent border-none outline-none text-[14px] text-[#58586b] placeholder:text-[#78788f] h-full w-full font-regular tracking-[0.105px]",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )}
              {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          )}

          {endIcon && (
            <div className={cn("ml-[8px] shrink-0 text-[#3A3A45] pointer-events-none", multiline && "mt-[2px]")}>
              {endIcon}
            </div>
          )}
        </div>

        {/* Helper Text */}
        {helperText && (
          <div className="flex gap-[6px] items-center min-h-[22px] py-[2px]">
            <p className={cn(
              "text-[14px] text-[#58586b] leading-[14px] tracking-[0.4382px]", 
               error && "text-[#dd1818]"
            )}>
              {helperText}
            </p>
          </div>
        )}
      </div>
    );
  }
);

AhgoraInput.displayName = "AhgoraInput";

export { AhgoraInput };
