import { Schema, model } from "mongoose";

const PhoneSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        imei: {
            type: Number,
            required: true,
            trim: true,
        },
        id_mark: {
            type: String,
            required: true,
            trim: true,
        },
        id_ref: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        versionKey: false,
    },
);

export const Phones = model('phone', PhoneSchema);