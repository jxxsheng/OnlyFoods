import express from "express";
import logout from "../controllers/logoutController.js";

const router = express.Router();

router.get("/logout", logout);

export default router;