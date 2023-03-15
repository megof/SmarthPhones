import express from "express";
import { body } from "express-validator";
import { AddRef, FindRef, FindAllRef, UpdateRef, DeleteRef} from "../Controllers/RefController.js";
import { validationResults } from "../Middlewares/RefValidate.js";

const router = express.Router();

router.post(
    '/add',
    [
        body('name', 'Formato incorrecto')
            .trim()
            .isLength({ min: 2 }),
    ],
    validationResults,
    AddRef,
)

router.get('/FindRef', FindRef);
router.get('/FindAllRef', FindAllRef);
router.put('/UpdateRef', UpdateRef);
router.delete('/DeleteRef', DeleteRef);

export default router;