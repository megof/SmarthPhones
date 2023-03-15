import { Marks } from "../Models/Marks.js";

// Add Mark

export const AddMark = async (req, res) => {
    try {
        const { name } = req.body;
        const mark = new Marks({ name });
        await mark.save();
        return res.status(200).json({
            ok: 'New Mark added'
        });
    } catch (error) {
        console.log('Error CMark: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
}

// Find Mark

export const FindMark = async (req, res) => {
    const { _id } = req.body;
    try {
        const mark = await Marks.findById(_id);
        if (!mark) {
            return res.status(400).json({
                error: 'Marks not found'
            });
        }
        return res.json(mark);
    } catch (error) {
        console.log('Error RMark: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
}

// All Mark

export const FindAllMark = async (req, res) => {
    try {
        const marks = await Marks.find();
        if (!marks) {
            return res.status(400).json({
                error: 'No marks registred'
            });
        }
        return res.json({
            marks
        });

    } catch (error) {
        console.log('Error RAMark: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};

// Update Mark

export const UpdateMark = async (req, res) => {
    const { _id, name } = req.body;
    try {
        const mark = await Marks.findById(_id);
        if (!mark) {
            return res.status(400).json({
                error: "Mark no found, could not be modified"
            });
        }
        await Marks.findByIdAndUpdate(_id, { name });
        mark.save();
        return res.json({
            ok: 'Mark modified'
        });
    } catch (error) {
        console.log('Error UMark: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};

// Delete Mark

export const DeleteMark = async (req, res) => {
    const _id = req.body;
    try {
        const mark = await Marks.findById(_id);
        if (!mark) {
            return res.status(400).json({
                error: "Marks with ID: " + _id + " - not found, could not be deleted "
            });
        }
        await Marks.findByIdAndRemove(_id);
        return res.json({
            ok: 'Deleted Mark'
        });
    } catch (error) {
        console.log('Error DMark: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};