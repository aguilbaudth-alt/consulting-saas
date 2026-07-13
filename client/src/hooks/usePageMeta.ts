import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.leanovex.com";
const DEFAULT_TITLE = "LEANOVEX Consulting";
const DEFAULT_DESCRIPTION =
  "Supplier quality audits and sourcing risk consulting across Asia. 20+ years of field experience, 500+ factories audited.";

const setLink = (rel: string, hreflang: string | null, href: string) => {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  let el = document.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const usePageMeta = (title?: string, description?: string) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title ? `${title} | LEANOVEX Consulting` : DEFAULT_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description ?? DEFAULT_DESCRIPTION);
    }

    const lang = pathname.split("/")[1] === "fr" ? "fr" : "en";
    document.documentElement.lang = lang;

    const restOfPath = pathname.replace(/^\/(en|fr)/, "");
    setLink("canonical", null, `${SITE_URL}/${lang}${restOfPath}`);
    setLink("alternate", "en", `${SITE_URL}/en${restOfPath}`);
    setLink("alternate", "fr", `${SITE_URL}/fr${restOfPath}`);
    setLink("alternate", "x-default", `${SITE_URL}/en${restOfPath}`);

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) {
        meta.setAttribute("content", DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description, pathname]);
};
