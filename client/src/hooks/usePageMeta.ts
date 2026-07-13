import { useEffect } from "react";

const DEFAULT_TITLE = "LEANOVEX Consulting";
const DEFAULT_DESCRIPTION =
  "Supplier quality audits and sourcing risk consulting across Asia. 16+ years of field experience, 500+ factories audited.";

export const usePageMeta = (title?: string, description?: string) => {
  useEffect(() => {
    document.title = title ? `${title} | LEANOVEX Consulting` : DEFAULT_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description ?? DEFAULT_DESCRIPTION);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) {
        meta.setAttribute("content", DEFAULT_DESCRIPTION);
      }
    };
  }, [title, description]);
};
