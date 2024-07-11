
const userSchema = require('../config/userSchema');

exports.addUser = async (req, res) => {
    try {

        const { firstName, lastName, dateOfBirth, address, gender } = req.body;

        const newUser = new userSchema({
            firstName,
            lastName,
            dateOfBirth: new Date(dateOfBirth),
            address,
            gender,
        });


        res.status(200).json({
            status: 'success',
            data: {
                user:newUser,
            },
        });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ status: 'fail', message: 'Internal Server Error' });
    }
};
