import { Schema, model } from "mongoose";

const RefSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        versionKey: false,
    },
);

export const Refs = model('ref', RefSchema);