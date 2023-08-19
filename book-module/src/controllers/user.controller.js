const { userservice } = require("../services");

// crate user

const createuser = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await userservice.createUser(reqBody);

        if (!user) {
            throw new Error("Someting is Wrong , Please  try again later !...");
        }

        res.status(200).json({
            success: true,
            message: "Suucessfully User Created",
            data: { user }
        })
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}


const userlist = async (req, res) => {

    try {

        const getlist = await userservice.getuserlist(req, res);

        res.status(200).json({
            success: true,
            message: "Data SuccessFully Get User list .....",
            data: getlist
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** Delete user */
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExists = await userservice.getUserById(userId);
        if (!userExists) {
            throw new Error("User not found!");
        }

        await userservice.deleteUser(userId);
        res.status(200).json({
            success: true,
            message: "User delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createuser,
    userlist,
    deleteUser,
}