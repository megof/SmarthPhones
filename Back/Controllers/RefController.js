import { Refs } from "../Models/Ref.js";

// Add Ref

export const AddRef = async (req, res) => {
    try {
        const { name } = req.body;
        const ref = new Refs({ name });
        await ref.save();
        return res.status(200).json({
            ok: 'New Ref added'
        });
    } catch (error) {
        console('Error CRef: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
}

// Find Ref

export const FindRef = async (req, res) => {
    const { _id } = req.body;
    try {
        const ref = await Refs.findById(_id);
        if (!ref) {
            return res.status(400).json({
                error: 'Refs not found'
            });
        }
        return res.json(ref);
    } catch (error) {
        console('Error RRef: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
}

// All Ref

export const FindAllRef = async (req, res) => {
    try {
        const refs = await Refs.find();
        if (!refs) {
            return res.status(400).json({
                error: 'No Refs registred'
            });
        }
        return res.json({
            refs
        });

    } catch (error) {
        console('Error RARef: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};

// Update Ref

export const UpdateRef = async (req, res) => {
    const { _id, name } = req.body;
    try {
        const ref = await Refs.findById(_id);
        if (!ref) {
            return res.status(400).json({
                error: "Ref no found, could not be modified"
            });
        }
        await Refs.findByIdAndUpdate(_id, { name });
        ref.save();
        return res.json({
            ok: 'Ref modified'
        });
    } catch (error) {
        console('Error URef: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};

// Delete Ref

export const DeleteRef = async (req, res) => {
    const _id = req.body;
    try {
        const ref = await Refs.findById(_id);
        if (!ref) {
            return res.status(400).json({
                error: "Refs with ID: " + _id + " - not found, could not be deleted "
            });
        }
        await Refs.findByIdAndRemove(_id);
        return res.json({
            ok: 'Deleted Ref'
        });
    } catch (error) {
        console('Error DRef: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};