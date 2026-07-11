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

  if (!url) {
    console.error(
      "[submitLead] VITE_GOOGLE_SCRIPT_URL is not set — check your .env file.",
    );
    throw new Error("Lead capture is not configured.");
  }

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
    });
  } catch (networkErr) {
    console.error("[submitLead] Network error reaching Apps Script:", networkErr, {
      url,
      source: payload.source,
    });
    throw new Error("Network error — could not reach the submission endpoint.");
  }

  if (!res.ok) {
    const bodyText = await res.text().catch(() => "<unreadable response body>");
    console.error("[submitLead] Apps Script returned a non-OK status:", {
      url,
      source: payload.source,
      status: res.status,
      statusText: res.statusText,
      body: bodyText.slice(0, 500),
    });
    throw new Error(`Submission failed (HTTP ${res.status})`);
  }
};
