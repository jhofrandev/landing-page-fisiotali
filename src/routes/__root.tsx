import { createRootRoute } from "@tanstack/react-router";

import AppPages from "@/pages/AppPages";

export const Route = createRootRoute({
  component: AppPages,
});
