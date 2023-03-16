import { Schema, model } from "mongoose";

const EmployeeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        last: {
            type: String,
            required: true,
        },
        dir: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        versionKey: false,
    },
);

export const Employees = model('employees', EmployeeSchema);