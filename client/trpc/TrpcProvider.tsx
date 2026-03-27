import { ReactNode } from "react";
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../server/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";

export const trpc = createTRPCReact<AppRouter>();

function TrpcProvider({ children }: { children: ReactNode }) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}

export default TrpcProvider;
