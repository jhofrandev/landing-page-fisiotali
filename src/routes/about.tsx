import { createFileRoute } from "@tanstack/react-router";

import AboutTemplate from "@/templates/AboutTemplate";

export const Route = createFileRoute("/about")({
  component: AboutTemplate,
});
