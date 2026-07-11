import { Router } from "express";
import { getCurrentUser } from "../controllers/user.controller";
import { requireAuth } from "../middleware/auth";
import { asyncHandler } from "../utils/asyncHandler";

const router = Router();

router.get("/me", requireAuth, asyncHandler(getCurrentUser));

export default router;
