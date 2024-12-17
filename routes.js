import express from "express";
import { getUserProfile, githubAuth, githubCallback } from "./controller.js";

const router = express.Router();

router.route("/github").get(githubAuth);
router.route("/github-callback").get(githubCallback);
router.route("/get-user-profile").get(getUserProfile);

export default router;
