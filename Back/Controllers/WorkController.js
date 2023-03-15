import { Works } from "../Models/Works.js";

// Add Work

export const AddWork = async (req, res) => {
    try {
        const { name, id_employee, id_phone, date, Observation } = req.body;
        const work = new Works({ name, id_employee, id_phone, date, Observation });
        await work.save();
        return res.status(200).json({
            ok: 'New Work added'
        });
    } catch (error) {
        console.log('Error CWork: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
}

// Find Work

export const FindWork = async (req, res) => {
    const { _id } = req.body;
    try {
        const work = await Works.findById(_id);
        if (!work) {
            return res.status(400).json({
                error: 'Works not found'
            });
        }
        return res.json(work);
    } catch (error) {
        console('Error RWork: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
}

// All Work

export const FindAllWork = async (req, res) => {
    try {
        const works = await Works.find();
        if (!works) {
            return res.status(400).json({
                error: 'No Works registred'
            });
        }
        return res.json({
            works
        });

    } catch (error) {
        console('Error RAWork: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};

