import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

import Contact from "./pages/Contact";
import Properties from "./pages/Properties";
import NotFound from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import ContactPopup from './components/ContactPopup';

const App = () => (
  <>
    <ContactPopup />
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
       
        <Route path="/contact" element={<Contact />} />
        <Route path="/properties/:type" element={<Properties />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
