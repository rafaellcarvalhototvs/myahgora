"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "./utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex h-[10px] w-[26px] shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#81cef5] data-[state=unchecked]:bg-[#aaa]",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-[16px] w-[16px] rounded-full shadow-sm transition-transform data-[state=checked]:bg-[#0c6d9e] data-[state=unchecked]:bg-white data-[state=checked]:translate-x-[10px] data-[state=unchecked]:translate-x-[0px]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
