import "@/index.css";
import { StrictMode } from "react";
import { routeTree } from "@/routeTree.gen";
import { createRoot } from "react-dom/client";
import { QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/theme-provider";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

const persister = createAsyncStoragePersister({ storage: window.localStorage });
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 60 * 1000,
    },
  },
});

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
  defaultViewTransition: true,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
  defaultPendingMs: 0,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </PersistQueryClientProvider>
  </StrictMode>,
);
