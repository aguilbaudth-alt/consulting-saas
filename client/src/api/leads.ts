interface LeadPayload {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
  source: "audit-guide" | "contact";
}

/**
 * Posts to the Google Apps Script Web App backing the Sheet. The exact response
 * shape depends on whatever script is deployed there, so we only rely on the
 * HTTP status — not a specific JSON contract — to decide success/failure.
 */
export const submitLead = async (payload: LeadPayload): Promise<void> => {
  const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Failed to submit");
  }
};
