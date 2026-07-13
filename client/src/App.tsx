import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MarketingLayout } from "./components/MarketingLayout";
import { ScrollToTop } from "./components/ScrollToTop";
import { AuditGuide } from "./pages/AuditGuide";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PortfolioProject } from "./pages/PortfolioProject";
import { Register } from "./pages/Register";

const App = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/audit-guide" element={<AuditGuide />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/:slug" element={<PortfolioProject />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default App;
