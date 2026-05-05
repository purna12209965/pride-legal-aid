import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ChatAssistant from "./pages/ChatAssistant";
import Resources from "./pages/Resources";
import Counseling from "./pages/Counseling";
import DashboardRights from "./pages/dashboard/DashboardRights";
import DashboardCases from "./pages/dashboard/DashboardCases";
import DashboardTerminology from "./pages/dashboard/DashboardTerminology";
import DashboardCommunity from "./pages/dashboard/DashboardCommunity";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatAssistant />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/counseling" element={<Counseling />} />
          <Route path="/dashboard/rights" element={<DashboardRights />} />
          <Route path="/dashboard/cases" element={<DashboardCases />} />
          <Route path="/dashboard/terminology" element={<DashboardTerminology />} />
          <Route path="/dashboard/community" element={<DashboardCommunity />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
