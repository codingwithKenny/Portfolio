"use client"

import React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value, text, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-6 w-full overflow-hidden rounded bg-slate-200 dark:bg-slate-800",
      className
    )}
    {...props}
  >
    <p className="absolute z-10 text-white text-sm font-thin  ml-2">{text}<span className="ml-40">{`${value}%`}</span></p>
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-gradient-to-r from-blue-950 via-purple-500 to-pink-500 dark:bg-slate-50 transition-al"
      style={{
        transform: `translateX(-${100 - value}%)`,
        // transition: "transform 0.3s ease",
      }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

