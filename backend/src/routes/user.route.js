import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMyfriends, getRecommendedUsers } from "../controllers/user.controller.js";

const router = express.Router();

// This is just because we don't have to write it everytime
router.use(protectRoute);

router.get("/",getRecommendedUsers);
router.get("/friends", getMyfriends);

export default router;