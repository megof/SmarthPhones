import express from "express";
import { body } from "express-validator";
import { AddEmployee, FindEmployee, FindAllEmployee, UpdateEmployee, DeleteEmployee } from "../Controllers/EmployeeController.js";
import { validationResults } from "../Middlewares/EmployeeValidate.js";

const router = express.Router();

router.post(
    '/add',
    [
        body('name', 'Formato incorrecto')
            .trim()
            .isLength({ min: 4 }),
        body('last', 'Formato incorrecto')
            .isLength({ min: 4 }),
        body('dir', 'Formato incorrecto')
            .isLength({ min: 4 }),
        body('phone', 'Formato incorrecto')
            .trim()
            .isLength({ min: 10 }),
        body('email', 'Formato incorrecto')
            .trim()
            .isLength({ min: 4 }),

    ],
    validationResults,
    AddEmployee,
);

router.get('/FindEmployee', FindEmployee);
router.get('/FindAllEmployee', FindAllEmployee);
router.put('/UpdateEmployee', UpdateEmployee);
router.delete('/DeleteEmployee/:id', DeleteEmployee);

export default router;