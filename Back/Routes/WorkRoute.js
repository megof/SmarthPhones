import express from "express";
import { AddWork, FindWork, FindAllWork } from "../Controllers/WorkController.js";

const router = express.Router();

router.post('/add', AddWork);
router.get('/FindWork', FindWork);
router.get('/FindAllWork', FindAllWork);

export default router;