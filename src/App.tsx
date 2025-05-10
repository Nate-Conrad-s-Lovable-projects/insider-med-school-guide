
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TenSteps from "./pages/TenSteps";
import McatPrep from "./pages/McatPrep";
import AdmissionsSecrets from "./pages/AdmissionsSecrets";
import InterviewTips from "./pages/InterviewTips";
import PersonalStatement from "./pages/PersonalStatement";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/10-steps-to-accepted" element={<TenSteps />} />
            <Route path="/mcat-prep-courses" element={<McatPrep />} />
            <Route path="/admissions-secrets" element={<AdmissionsSecrets />} />
            <Route path="/interview-tips" element={<InterviewTips />} />
            <Route path="/personal-statement" element={<PersonalStatement />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
