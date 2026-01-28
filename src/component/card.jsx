"use client";

import * as React from "react";

// Card container
export const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={
      "rounded-lg border border-border bg-card text-card-foreground shadow-sm " +
      (className || "")
    }
    {...props}
  />
));
Card.displayName = "Card";

// Card header
export const CardHeader = ({ className, ...props }) => (
  <div className={"flex flex-col space-y-1.5 p-6 " + (className || "")} {...props} />
);
CardHeader.displayName = "CardHeader";

// Card title
export const CardTitle = ({ className, ...props }) => (
  <h3 className={"text-lg font-semibold leading-none tracking-tight " + (className || "")} {...props} />
);
CardTitle.displayName = "CardTitle";

// Card description
export const CardDescription = ({ className, ...props }) => (
  <p className={"text-sm text-muted-foreground " + (className || "")} {...props} />
);
CardDescription.displayName = "CardDescription";

// Card content
export const CardContent = ({ className, ...props }) => (
  <div className={"p-6 pt-0 " + (className || "")} {...props} />
);
CardContent.displayName = "CardContent";

// Card footer
export const CardFooter = ({ className, ...props }) => (
  <div className={"flex items-center p-6 pt-0 " + (className || "")} {...props} />
);
CardFooter.displayName = "CardFooter";