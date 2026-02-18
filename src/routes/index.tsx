import { createFileRoute } from "@tanstack/react-router";

import HomeTemplate from "@/templates/HomeTemplate";

export const Route = createFileRoute("/")({
  component: HomeTemplate,
});
