import { createFileRoute } from "@tanstack/react-router";

import ContactTemplate from "@/templates/ContactTemplate";

export const Route = createFileRoute("/contact")({
  component: ContactTemplate,
});
