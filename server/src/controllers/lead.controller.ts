import { Request, Response } from "express";
import {
  sendContactAcknowledgementEmail,
  sendGuideEmail,
  sendLeadNotification,
} from "../services/mail.service";
import { createContactRequest, createLead } from "../services/lead.service";

export const captureLead = async (req: Request, res: Response) => {
  const lead = await createLead(req.body);

  let emailSent = true;
  try {
    await sendGuideEmail(lead.email, lead.name);
  } catch (err) {
    emailSent = false;
    console.error("Failed to send guide email to", lead.email, err);
  }

  try {
    await sendLeadNotification(lead);
  } catch (err) {
    console.error("Failed to send lead notification for", lead.email, err);
  }

  res.status(201).json({ id: lead.id, emailSent });
};

export const submitContactRequest = async (req: Request, res: Response) => {
  const lead = await createContactRequest(req.body);

  let emailSent = true;
  try {
    await sendContactAcknowledgementEmail(lead.email, lead.name);
  } catch (err) {
    emailSent = false;
    console.error("Failed to send contact acknowledgement to", lead.email, err);
  }

  try {
    await sendLeadNotification(lead);
  } catch (err) {
    console.error("Failed to send lead notification for", lead.email, err);
  }

  res.status(201).json({ id: lead.id, emailSent });
};
