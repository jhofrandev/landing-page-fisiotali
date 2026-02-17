import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

const rootRoute = createRootRoute();
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <div>Hello World</div>,
});
const routeTree = rootRoute.addChildren([indexRoute]);
const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
