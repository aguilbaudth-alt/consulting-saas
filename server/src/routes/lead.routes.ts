import { Router } from "express";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { captureLead, submitContactRequest } from "../controllers/lead.controller";
import { validate } from "../middleware/validate";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

const leadRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

const captureSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  company: z.string().min(1).max(150),
  phone: z.string().max(30).optional(),
});

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  company: z.string().min(1).max(150),
  message: z.string().min(1).max(2000),
});

router.post("/capture", leadRateLimit, validate(captureSchema), asyncHandler(captureLead));
router.post("/contact", leadRateLimit, validate(contactSchema), asyncHandler(submitContactRequest));

export default router;
