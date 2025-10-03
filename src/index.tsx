import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AllVariants } from "./components/Toggles/toggles.stories";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AllVariants />
  </StrictMode>,
);
