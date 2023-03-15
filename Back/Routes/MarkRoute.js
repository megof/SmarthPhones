import express from "express";
import { body } from "express-validator";
import { AddMark, FindMark, FindAllMark, UpdateMark, DeleteMark } from "../Controllers/MarksController.js";
import { validationResults } from "../Middlewares/MarkValidate.js";

const router = express.Router();

router.post(
    '/add',
    [
        body('name', 'Formato incorrecto')
            .trim()
            .isLength({ min: 2 }),
    ],
    validationResults,
    AddMark,
)

router.get('/FindMark', FindMark);
router.get('/FindAllMark', FindAllMark);
router.put('/UpdateMark', UpdateMark);
router.delete('/DeleteMark', DeleteMark);

export default router;