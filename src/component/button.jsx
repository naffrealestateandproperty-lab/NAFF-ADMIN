"use client";

import * as React from "react";

// A simple styled button component
export const Button = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${className || ""}`}
      {...props}
    />
  );
});

Button.displayName = "Button";