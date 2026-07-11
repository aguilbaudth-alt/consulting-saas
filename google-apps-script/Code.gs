/**
 * LEANOVEX Consulting — lead capture backend, running entirely on Google Apps Script.
 * No server, no database: this Web App writes to a Google Sheet and sends emails.
 *
 * SETUP
 * 1. Create a Google Sheet. Rename the first tab to "Leads" and add a header row:
 *    Timestamp | Source | Name | Email | Company | Phone | Message
 * 2. In the Sheet: Extensions > Apps Script. Delete the default content and paste this file.
 * 3. Upload the guide PDF (Supplier_Audit_Guide_Thailand.pdf) to your Google Drive,
 *    open it, copy the file ID from the URL, and paste it into GUIDE_FILE_ID below.
 * 4. Update OWNER_EMAIL below to the inbox that should receive lead notifications.
 * 5. Deploy > New deployment > type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    Copy the resulting /exec URL — that's VITE_GOOGLE_SCRIPT_URL in the frontend .env.
 * 6. Whenever you edit this script, you must create a new deployment (or "Manage
 *    deployments" > edit > new version) for the changes to go live at the same URL.
 */

const SHEET_NAME = "Leads";
const OWNER_EMAIL = "aguilbaud.th@gmail.com";
const GUIDE_FILE_ID = "REPLACE_WITH_YOUR_DRIVE_FILE_ID";

const SOURCE_LABELS = {
  "audit-guide": "Guide download",
  contact: "Consultation request",
};

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const { name, email, company, phone, message, source } = data;

  if (!name || !email || !company || !source) {
    return jsonResponse({ ok: false, error: "Missing required fields" });
  }

  appendRow({ name, email, company, phone, message, source });

  let emailSent = true;
  try {
    if (source === "audit-guide") {
      sendGuideEmail(email, name);
    } else if (source === "contact") {
      sendContactAcknowledgement(email, name);
    }
  } catch (err) {
    emailSent = false;
    Logger.log("Failed to send visitor email: " + err);
  }

  try {
    sendOwnerNotification({ name, email, company, phone, message, source });
  } catch (err) {
    Logger.log("Failed to send owner notification: " + err);
  }

  return jsonResponse({ ok: true, emailSent });
}

function appendRow({ name, email, company, phone, message, source }) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  sheet.appendRow([new Date(), source, name, email, company, phone || "", message || ""]);
}

function sendGuideEmail(to, name) {
  const attachments = [];
  if (GUIDE_FILE_ID && GUIDE_FILE_ID !== "REPLACE_WITH_YOUR_DRIVE_FILE_ID") {
    attachments.push(DriveApp.getFileById(GUIDE_FILE_ID).getBlob());
  }

  MailApp.sendEmail({
    to,
    subject: "Your guide: 10 Red Flags When Sourcing Suppliers in Thailand",
    htmlBody:
      "<p>Hi " +
      name +
      ",</p>" +
      "<p>Thanks for requesting the guide. It's attached to this email as a PDF, drawn from " +
      "16+ years of field experience across 500+ factory audits in Asia.</p>" +
      "<p>If you'd like a second set of eyes on your current suppliers, just reply to this " +
      "email to schedule a consultation.</p>" +
      "<p>Best,<br>Antoine</p>",
    name: "LEANOVEX Consulting",
    attachments,
  });
}

function sendContactAcknowledgement(to, name) {
  MailApp.sendEmail({
    to,
    subject: "We've received your consultation request",
    htmlBody:
      "<p>Hi " +
      name +
      ",</p>" +
      "<p>Thanks for your message — I've received your request for a consultation and will " +
      "follow up within one business day to find a time that works.</p>" +
      "<p>Best,<br>Antoine</p>",
    name: "LEANOVEX Consulting",
  });
}

function sendOwnerNotification({ name, email, company, phone, message, source }) {
  const label = SOURCE_LABELS[source] || source;
  let body =
    "New lead: " + label + "\n\n" + "Name: " + name + "\nEmail: " + email + "\nCompany: " + company;
  if (phone) body += "\nPhone: " + phone;
  if (message) body += "\n\nMessage:\n" + message;

  MailApp.sendEmail({
    to: OWNER_EMAIL,
    replyTo: email,
    subject: "New lead (" + label + "): " + name,
    body,
  });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
