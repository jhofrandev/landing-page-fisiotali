import { createFileRoute } from "@tanstack/react-router";

import ServiceTemplate from "@/templates/ServiceTemplate";

export const Route = createFileRoute("/services")({
  component: ServiceTemplate,
});
