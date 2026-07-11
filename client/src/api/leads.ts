interface LeadPayload {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
  source: "audit-guide" | "contact";
}

interface LeadResponse {
  ok: boolean;
  emailSent?: boolean;
  error?: string;
}

/**
 * Posts to the Google Apps Script Web App (see /google-apps-script/Code.gs).
 * Uses text/plain to avoid a CORS preflight request, which Apps Script Web Apps
 * don't handle reliably — the script still parses the body as JSON on its end.
 */
export const submitLead = async (payload: LeadPayload): Promise<LeadResponse> => {
  const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const data: LeadResponse = await res.json();
  if (!res.ok || !data.ok) {
    throw new Error(data.error ?? "Failed to submit");
  }
  return data;
};
