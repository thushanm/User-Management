
const users = require('../config/userSchema');

exports.addUser = async (req, res) => {
    try {

        const { firstName, lastName, dateOfBirth, address, gender } = req.body;

        const newUser = new users({
            firstName,
            lastName,
            dateOfBirth: new Date(dateOfBirth),
            address,
            gender,
        });
          await users.create(newUser)


        res.status(200).json({
            status: 'success',
            data: {
                user:newUser,
            },
        });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ status: 'fail',
            message: 'Internal Server Error' });
    }
};
exports.getAllUsers = async(req, res)=> {
    try {
        const userAll = await users.find();
        res.status(200).json({
            status: "success",
            data: {
                userAll
            }

        })


    } catch (err) {
        console.error('Error getting All users:', err);
        res.status(500).json({
            status: 'fail',
            message: 'Internal Server Error'
        });

    }
}
