import "./index.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Toaster } from "sonner";

import { WeatherUnitProvider } from "./context/WeatherUnitContext.tsx";
import { WeatherProvider } from "./context/WeatherContext.tsx";
import { queryClient } from "./queryClient.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <WeatherUnitProvider>
          <App />
          <Toaster />
        </WeatherUnitProvider>
      </WeatherProvider>
    </QueryClientProvider>
  </StrictMode>
);
