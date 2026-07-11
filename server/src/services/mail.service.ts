import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";
import { env } from "../config/env";

const GUIDE_FILENAME = "Supplier_Audit_Guide_Thailand.pdf";
const GUIDE_PATH = path.join(__dirname, "../../assets/guides", GUIDE_FILENAME);

const isValidEmail = (value: string | undefined): value is string =>
  !!value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const senderAddress = isValidEmail(env.SMTP_FROM) ? env.SMTP_FROM : env.GMAIL_USER;
const notificationRecipient = isValidEmail(env.NOTIFICATION_EMAIL)
  ? env.NOTIFICATION_EMAIL
  : env.GMAIL_USER;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.GMAIL_USER,
    pass: env.GMAIL_PASSWORD,
  },
});

const buildGuideEmailHtml = (name: string) => `
<div style="font-family: Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #334155;">
  <div style="background: linear-gradient(135deg, #1e3a8a, #065f46); padding: 32px 40px; border-radius: 8px 8px 0 0;">
    <p style="color: #6ee7b7; font-size: 12px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase; margin: 0 0 8px;">
      Free Quality Audit Guide
    </p>
    <h1 style="color: #ffffff; font-size: 22px; margin: 0; line-height: 1.3;">
      10 Red Flags When Sourcing Suppliers in Thailand
    </h1>
  </div>
  <div style="padding: 32px 40px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
    <p style="font-size: 15px; line-height: 1.6;">Hi ${name},</p>
    <p style="font-size: 15px; line-height: 1.6;">
      Thanks for requesting the guide. It's attached to this email as a PDF, drawn from
      16+ years of field experience across 500+ factory audits in Thailand.
    </p>
    <p style="font-size: 15px; line-height: 1.6;">
      Inside, you'll find the ten warning signs that most often precede a failed shipment,
      a quality escape, or a broken supplier relationship — so you can spot them before you
      place a purchase order.
    </p>
    <p style="font-size: 15px; line-height: 1.6;">
      If you'd like a second set of eyes on your current suppliers, just reply to this email
      to schedule a consultation.
    </p>
    <p style="font-size: 15px; line-height: 1.6; margin-top: 32px;">
      Best,<br />
      Antoine
    </p>
  </div>
</div>
`;

const buildGuideEmailText = (name: string) => `Hi ${name},

Thanks for requesting the guide "10 Red Flags When Sourcing Suppliers in Thailand" — it's attached to this email as a PDF.

Drawn from 16+ years of field experience across 500+ factory audits in Thailand, it covers the ten warning signs that most often precede a failed shipment, a quality escape, or a broken supplier relationship.

If you'd like a second set of eyes on your current suppliers, just reply to this email to schedule a consultation.

Best,
Antoine`;

export const sendGuideEmail = async (to: string, name: string) => {
  await transporter.sendMail({
    from: `"LEANOVEX Consulting" <${senderAddress}>`,
    to,
    subject: "Your guide: 10 Red Flags When Sourcing Suppliers in Thailand",
    html: buildGuideEmailHtml(name),
    text: buildGuideEmailText(name),
    attachments: [
      {
        filename: GUIDE_FILENAME,
        path: GUIDE_PATH,
      },
    ],
  });
};

export const guideFileExists = () => fs.existsSync(GUIDE_PATH);

const buildContactAckHtml = (name: string) => `
<div style="font-family: Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #334155;">
  <div style="background: linear-gradient(135deg, #1e3a8a, #0284c7); padding: 32px 40px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #ffffff; font-size: 20px; margin: 0; line-height: 1.3;">
      Thanks for reaching out
    </h1>
  </div>
  <div style="padding: 32px 40px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
    <p style="font-size: 15px; line-height: 1.6;">Hi ${name},</p>
    <p style="font-size: 15px; line-height: 1.6;">
      Thanks for your message — I've received your request for a consultation and will follow
      up within one business day to find a time that works.
    </p>
    <p style="font-size: 15px; line-height: 1.6;">
      In the meantime, feel free to reply directly to this email if there's anything specific
      you'd like me to prepare for.
    </p>
    <p style="font-size: 15px; line-height: 1.6; margin-top: 32px;">
      Best,<br />
      Antoine
    </p>
  </div>
</div>
`;

const buildContactAckText = (name: string) => `Hi ${name},

Thanks for your message — I've received your request for a consultation and will follow up within one business day to find a time that works.

In the meantime, feel free to reply directly to this email if there's anything specific you'd like me to prepare for.

Best,
Antoine`;

export const sendContactAcknowledgementEmail = async (to: string, name: string) => {
  await transporter.sendMail({
    from: `"LEANOVEX Consulting" <${senderAddress}>`,
    to,
    subject: "We've received your consultation request",
    html: buildContactAckHtml(name),
    text: buildContactAckText(name),
  });
};

interface LeadNotificationInput {
  name: string;
  email: string;
  company: string;
  phone?: string | null;
  message?: string | null;
  source: string;
}

const SOURCE_LABELS: Record<string, string> = {
  "audit-guide": "Guide download",
  contact: "Consultation request",
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const buildNotificationHtml = (lead: LeadNotificationInput) => `
<div style="font-family: Helvetica, Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #334155;">
  <div style="background: #0f172a; padding: 24px 32px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #ffffff; font-size: 18px; margin: 0;">
      New lead: ${SOURCE_LABELS[lead.source] ?? lead.source}
    </h1>
  </div>
  <div style="padding: 24px 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
    <p style="font-size: 14px; line-height: 1.7; margin: 0;">
      <strong>Name:</strong> ${escapeHtml(lead.name)}<br />
      <strong>Email:</strong> ${escapeHtml(lead.email)}<br />
      <strong>Company:</strong> ${escapeHtml(lead.company)}<br />
      ${lead.phone ? `<strong>Phone:</strong> ${escapeHtml(lead.phone)}<br />` : ""}
    </p>
    ${
      lead.message
        ? `<p style="font-size: 14px; line-height: 1.7; margin-top: 16px;"><strong>Message:</strong><br />${escapeHtml(lead.message)}</p>`
        : ""
    }
  </div>
</div>
`;

const buildNotificationText = (lead: LeadNotificationInput) => `New lead: ${SOURCE_LABELS[lead.source] ?? lead.source}

Name: ${lead.name}
Email: ${lead.email}
Company: ${lead.company}
${lead.phone ? `Phone: ${lead.phone}\n` : ""}${lead.message ? `\nMessage:\n${lead.message}` : ""}`;

export const sendLeadNotification = async (lead: LeadNotificationInput) => {
  await transporter.sendMail({
    from: `"LEANOVEX Consulting" <${senderAddress}>`,
    to: notificationRecipient,
    replyTo: lead.email,
    subject: `New lead (${SOURCE_LABELS[lead.source] ?? lead.source}): ${lead.name}`,
    html: buildNotificationHtml(lead),
    text: buildNotificationText(lead),
  });
};
