import { QueryClient } from "@tanstack/react-query";

// Create a new QueryClient instance
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Automatically refetch data when window is refocused
      refetchOnWindowFocus: false,
      // Retry failed requests once
      retry: 1,
    },
  },
});