/**
 * LEANOVEX Consulting — lead capture backend, running entirely on Google Apps Script.
 * No server, no database: this Web App writes to a Google Sheet and sends emails.
 *
 * SETUP
 * 1. Create a Google Sheet. Rename the first tab to "Leads" and add a header row:
 *    Timestamp | Source | Name | Email | Company | Phone | Message | Lang | Email Status | Notify Status
 * 2. In the Sheet: Extensions > Apps Script. Delete the default content and paste this file.
 * 3. The guide PDF lives in the repo at client/public/guides/ and is served as a static
 *    asset by the site itself — GUIDE_PDF_URL below just points at it, no Drive upload needed.
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
const GUIDE_PDF_URL = "https://leanovex.com/guides/Supplier_Audit_Guide_Thailand.pdf";

const SOURCE_LABELS = {
  "audit-guide": "Guide download",
  contact: "Consultation request",
};

const EMAIL_TEMPLATES = {
  en: {
    guideSubject: "Your guide: 10 Red Flags When Sourcing Suppliers in Thailand",
    guideBody: function (name) {
      return (
        "<p>Hi " +
        name +
        ",</p>" +
        "<p>Thanks for requesting the guide. It's attached to this email as a PDF, drawn from " +
        "16+ years of field experience across 500+ factory audits in Asia.</p>" +
        "<p>If you'd like a second set of eyes on your current suppliers, just reply to this " +
        "email to schedule a consultation.</p>" +
        "<p>Best,<br>Antoine</p>"
      );
    },
    contactSubject: "We've received your consultation request",
    contactBody: function (name) {
      return (
        "<p>Hi " +
        name +
        ",</p>" +
        "<p>Thanks for your message. I've received your request for a consultation and will " +
        "follow up within one business day to find a time that works.</p>" +
        "<p>Best,<br>Antoine</p>"
      );
    },
  },
  fr: {
    guideSubject: "Votre guide : 10 signaux d'alerte lors du sourcing de fournisseurs en Thaïlande",
    guideBody: function (name) {
      return (
        "<p>Bonjour " +
        name +
        ",</p>" +
        "<p>Merci pour votre demande de guide. Il est joint à cet email au format PDF, basé sur " +
        "16 années d'expérience terrain et plus de 500 audits d'usines en Asie.</p>" +
        "<p>Si vous souhaitez un second avis sur vos fournisseurs actuels, répondez simplement à cet " +
        "email pour planifier une consultation.</p>" +
        "<p>Cordialement,<br>Antoine</p>"
      );
    },
    contactSubject: "Nous avons bien reçu votre demande de consultation",
    contactBody: function (name) {
      return (
        "<p>Bonjour " +
        name +
        ",</p>" +
        "<p>Merci pour votre message. J'ai bien reçu votre demande de consultation et reviendrai " +
        "vers vous sous un jour ouvré pour trouver un créneau qui vous convient.</p>" +
        "<p>Cordialement,<br>Antoine</p>"
      );
    },
  },
};

function getTemplate(lang) {
  return EMAIL_TEMPLATES[lang] || EMAIL_TEMPLATES.en;
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const { name, email, company, phone, message, source } = data;
  const lang = data.lang === "fr" ? "fr" : "en";

  if (!name || !email || !company || !source) {
    return jsonResponse({ ok: false, error: "Missing required fields" });
  }

  let emailStatus = "sent";
  try {
    if (source === "audit-guide") {
      sendGuideEmail(email, name, lang);
    } else if (source === "contact") {
      sendContactAcknowledgement(email, name, lang);
    }
  } catch (err) {
    emailStatus = "FAILED: " + err.message;
  }

  let notifyStatus = "sent";
  try {
    sendOwnerNotification({ name, email, company, phone, message, source, lang });
  } catch (err) {
    notifyStatus = "FAILED: " + err.message;
  }

  appendRow({ name, email, company, phone, message, source, lang, emailStatus, notifyStatus });

  return jsonResponse({ ok: true, emailSent: emailStatus === "sent" });
}

function appendRow({ name, email, company, phone, message, source, lang, emailStatus, notifyStatus }) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  sheet.appendRow([
    new Date(),
    source,
    name,
    email,
    company,
    phone || "",
    message || "",
    lang,
    emailStatus,
    notifyStatus,
  ]);
}

function sendGuideEmail(to, name, lang) {
  const template = getTemplate(lang);
  const attachments = [
    UrlFetchApp.fetch(GUIDE_PDF_URL).getBlob().setName("Supplier_Audit_Guide_Thailand.pdf"),
  ];

  MailApp.sendEmail({
    to,
    subject: template.guideSubject,
    htmlBody: template.guideBody(name),
    name: "LEANOVEX Consulting",
    attachments,
  });
}

function sendContactAcknowledgement(to, name, lang) {
  const template = getTemplate(lang);

  MailApp.sendEmail({
    to,
    subject: template.contactSubject,
    htmlBody: template.contactBody(name),
    name: "LEANOVEX Consulting",
  });
}

function sendOwnerNotification({ name, email, company, phone, message, source, lang }) {
  const label = SOURCE_LABELS[source] || source;
  let body =
    "New lead: " +
    label +
    " (" +
    lang +
    ")\n\n" +
    "Name: " +
    name +
    "\nEmail: " +
    email +
    "\nCompany: " +
    company;
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
