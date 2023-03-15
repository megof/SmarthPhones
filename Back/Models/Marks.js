import { Schema, model} from "mongoose";

const MarksSchema = new Schema(
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

export const Marks = model('marks', MarksSchema);