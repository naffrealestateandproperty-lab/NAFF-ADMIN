"use client";

import { ToastProvider, ToastViewport } from "@radix-ui/react-toast";

export function Toaster() {
  return (
    <ToastProvider>
      <ToastViewport
        className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-96 max-w-full z-50 outline-none"
      />
    </ToastProvider>
  );
}