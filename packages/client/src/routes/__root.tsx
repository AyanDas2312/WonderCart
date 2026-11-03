import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
const RootLayout = () => (
  <>
    <Outlet />
    <TanStackDevtools
      plugins={[
        {
          name: "Query",
          render: <ReactQueryDevtoolsPanel />,
        },
        {
          name: "Router",
          render: <TanStackRouterDevtoolsPanel />,
        }
      ]}
    />
  </>
)

export const Route = createRootRoute({ component: RootLayout });