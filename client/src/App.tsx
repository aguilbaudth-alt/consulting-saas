import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MarketingLayout } from "./components/MarketingLayout";
import { ScrollToTop } from "./components/ScrollToTop";
import { LANG_STORAGE_KEY } from "./context/LanguageContext";
import { About } from "./pages/About";
import { AuditGuide } from "./pages/AuditGuide";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { PortfolioProject } from "./pages/PortfolioProject";
import { Register } from "./pages/Register";

const VALID_LANGS = ["en", "fr"];

const RootRedirect = () => {
  const stored = typeof window !== "undefined" ? window.localStorage.getItem(LANG_STORAGE_KEY) : null;
  const lang = stored === "fr" ? "fr" : "en";
  return <Navigate to={`/${lang}`} replace />;
};

const LangGate = () => {
  const { lang } = useParams();
  if (!lang || !VALID_LANGS.includes(lang)) {
    return <Navigate to="/en" replace />;
  }
  return <MarketingLayout />;
};

const LangHomeRedirect = () => {
  const { lang } = useParams();
  return <Navigate to={`/${lang}`} replace />;
};

const App = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/:lang" element={<LangGate />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="audit-guide" element={<AuditGuide />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio/:slug" element={<PortfolioProject />} />
        <Route path="*" element={<LangHomeRedirect />} />
      </Route>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<Navigate to="/en" replace />} />
      <Route path="/" element={<RootRedirect />} />
      <Route path="*" element={<RootRedirect />} />
    </Routes>
  </>
);

export default App;
