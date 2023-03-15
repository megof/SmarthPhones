import express from "express";
import { body } from "express-validator";
import { AddPhone, FindPhone, FindAllPhone, UpdatePhone, DeletePhone } from "../Controllers/PhonesController.js";

const router = express.Router();

router.post(
    '/add',
    [
        body('name', 'Formato incorrecto')
            .trim()
            .isLength({ min: 2 }),
        body('imei', 'Formato incorrecto')
            .isLength({ min: 10 }),
    ],
    AddPhone,
);

router.get('/FindPhone', FindPhone);
router.get('/FindAllPhone', FindAllPhone);
router.put('/UpdatePhone', UpdatePhone);
router.delete('/DeletePhone', DeletePhone);

export default router;