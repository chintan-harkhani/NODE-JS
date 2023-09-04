const { UserService } = require("../services");

// crate user

const createuser = async (req, res) => {
    try {
        const reqBody = req.body;

        const user = await UserService.createUser(reqBody);

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

        const getlist = await UserService.getuserlist(req, res);

        res.status(200).json({
            success: true,
            message: "Data SuccessFully Get User list .....",
            data: getlist
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

// get user details
const getUserDetails = async (req, res) => {
    try {
        const userId = req.params.userId
        const getDetails = await UserService.getUserById(userId);
        if (!getDetails) {
            throw new Error("User not found!");
        }
        res.status(200).json({
            success: true,
            message: "User details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete user */
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExists = await UserService.getUserById(userId);
        if (!userExists) {
            throw new Error("User not found!");
        }

        await UserService.deleteUser(userId);
        res.status(200).json({
            success: true,
            message: "User delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** User details update by id */
const updateUserDetails = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExists = await UserService.getUserById(userId);
        if (!userExists) {
            throw new Error("User data not found!");
        }

        await UserService.UpdateUser(userId, req.body);

        res.status(200).json({
            success: true,
            message: "User details update successfully!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports ={
     createuser,
     userlist,
     deleteUser,
     updateUserDetails,
     getUserDetails
}