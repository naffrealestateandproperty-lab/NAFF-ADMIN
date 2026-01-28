"use client";

import * as React from "react";

// A simple styled label component
export const Label = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 " +
        (className || "")
      }
      {...props}
    />
  );
});

Label.displayName = "Label";