import { Schema, model } from "mongoose";

const WorkSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        id_employee: {
            type: String,
            required: true,
            trim: true,
        },
        id_phone: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: Date,
            default: Date.now,
            required: true,
            trim: true,
        },
        Observation: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
    },
);

export const Works = model('work', WorkSchema);