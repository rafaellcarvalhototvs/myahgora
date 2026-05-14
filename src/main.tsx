
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { BrandThemeProvider } from "./app/components/ui/brand-theme-provider.tsx";
import { InspectModeProvider } from "./app/components/ui/inspect-mode-provider.tsx";
import { ThemeProvider } from "./app/components/ui/theme-provider.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <BrandThemeProvider>
      <InspectModeProvider>
        <App />
      </InspectModeProvider>
    </BrandThemeProvider>
  </ThemeProvider>,
);
  
