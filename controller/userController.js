
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
};
exports.getUser=async(req,res)=>{
    try {
        const getUser = await users.findById(req.params.id)
        res.status(200)({
            status:"getData",
            data:{

                getUser
            }


        })
    }catch (err){
        res.status(404)({

            status:"HasSome Problem",
            massage:err

        })


    }
}
exports.deleteUser= async (req,res)=>{
    try {
        const deleteUser = await users.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:"deleted",
            data:deleteUser

        })
    }catch (err){

        res.status(404).json({
            status:"Error",
            massage:err


        })
    }
}
exports.updateUser=async(req,res)=>{
    try {
        const updateUser= await users.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({

            status:"updated",
            data:updateUser
        })
    }catch (err){

        res.status(404).json({
            status:"hasSomeProblem",
            massage:err

        })
    }

}

