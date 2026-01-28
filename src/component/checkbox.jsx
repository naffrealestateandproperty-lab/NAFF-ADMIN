"use client";

import * as React from "react";

// A simple styled checkbox component
export const Checkbox = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      ref={ref}
      className={
        "h-4 w-4 rounded border border-input text-primary focus:ring-2 focus:ring-ring " +
        "disabled:cursor-not-allowed disabled:opacity-50 " +
        (className || "")
      }
      {...props}
    />
  );
});

Checkbox.displayName = "Checkbox";