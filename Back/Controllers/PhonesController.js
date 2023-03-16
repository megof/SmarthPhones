import { Phones } from "../Models/Phones.js";

// Add Phone

export const AddPhone = async (req, res) => {
    try {
        const { name, imei, id_mark, id_ref, description, status } = req.body;
        const phone = new Phones({ name, imei, id_mark, id_ref, description, status });
        await phone.save();
        return res.status(200).json({
            ok: 'New Phone added'
        });
    } catch (error) {
        console.log('Error CPhone: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
}

// Find Phone

export const FindPhone = async (req, res) => {
    const { _id } = req.body;
    try {
        const phone = await Phones.findById(_id);
        if (!phone) {
            return res.status(400).json({
                error: 'Phones not found'
            });
        }
        return res.json(phone);
    } catch (error) {
        console.log('Error RPhone: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
}

// All Phone

export const FindAllPhone = async (req, res) => {
    try {
        const phones = await Phones.find();
        if (!phones) {
            return res.status(400).json({
                error: 'No Phones registred'
            });
        }
        return res.json({
            phones
        });

    } catch (error) {
        console('Error RAPhone: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};

// Update Phone

export const UpdatePhone = async (req, res) => {
    const { _id, name, imei, id_mark, id_ref, description, status } = req.body;
    try {
        const phone = await Phones.findById(_id);
        if (!phone) {
            return res.status(400).json({
                error: "Phone no found, could not be modified"
            });
        }
        await Phones.findByIdAndUpdate(_id, { name, imei, id_mark, id_ref, description, status });
        phone.save();
        return res.json({
            ok: 'Phone modified'
        });
    } catch (error) {
        console.log('Error UPhone: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};

// Delete Phone

export const DeletePhone = async (req, res) => {
    const _id = req.params.id;
    try {
        const phone = await Phones.findById(_id);
        if (!phone) {
            return res.status(400).json({
                error: "Phones with ID: " + _id + " - not found, could not be deleted "
            });
        }
        await Phones.findByIdAndRemove(_id);
        return res.json({
            ok: 'Deleted Phone'
        });
    } catch (error) {
        console.log('Error DPhone: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};