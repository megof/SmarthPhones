import { Employees } from "../Models/Employees.js";

// Add Employee

export const AddEmployee = async (req, res) => {
    try {
        const { name, last, dir, phone, email } = req.body;
        const employee = new Employees({ name, last, dir, phone, email });
        await employee.save();
        return res.status(200).json({
            ok: 'New Employee added'
        });
    } catch (error) {
        console('Error CEmployee: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
}

// Find Employee

export const FindEmployee = async (req, res) => {
    const { _id } = req.body;
    try {
        const employee = await Employees.findById(_id);
        if (!employee) {
            return res.status(400).json({
                error: 'Employees not found'
            });
        }
        return res.json(employee);
    } catch (error) {
        console('Error REmployee: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
}

// All Employee

export const FindAllEmployee = async (req, res) => {
    try {
        const employees = await Employees.find();
        if (!employees) {
            return res.status(400).json({
                error: 'No Employees registred'
            });
        }
        return res.json({
            employees
        });

    } catch (error) {
        console('Error RAEmployee: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};

// Update Employee

export const UpdateEmployee = async (req, res) => {
    const { _id, name, last, dir, phone, email } = req.body;
    try {
        const employee = await Employees.findById(_id);
        if (!employee) {
            return res.status(400).json({
                error: "Employee no found, could not be modified"
            });
        }
        await Employees.findByIdAndUpdate(_id, { name, last, dir, phone, email });
        employee.save();
        return res.json({
            ok: 'Employee modified'
        });
    } catch (error) {
        console('Error UEmployee: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};

// Delete Employee

export const DeleteEmployee = async (req, res) => {
    const _id = req.body;
    try {
        const employee = await Employees.findById(_id);
        if (!employee) {
            return res.status(400).json({
                error: "Employees with ID: " + _id + " - not found, could not be deleted "
            });
        }
        await Employees.findByIdAndRemove(_id);
        return res.json({
            ok: 'Deleted Employee'
        });
    } catch (error) {
        console('Error DEmployee: ', error);
        return res.status(500).json({
            error: 'Server error'
        });
    }
};