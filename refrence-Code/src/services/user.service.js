const { user } = require("../models");

/** create user
* @param {object} reqBody
* @returns {Promise<user>}
*/

const createUser = async (reqBody) => {
    return user.create(reqBody);
}

/**
 * get User list
* @param {object} filter
* @param {boject} options
* @returns {Promise<user>}
*/

const getuserlist = async (req, res) => {

    return user.find(
        // { $or: [{ is_active: true, age: 19 }] }
    );
};

/**
 * Get user details by id
 * @param {ObjectId} userId
 * @returns {Promise<user>}
 */
const getUserById = async (userId) => {
    return user.findById(userId)
};

/**
 * Delete user
 * @param {ObjectId} userId
 * @returns {Promise<user>}
 */
const deleteUser = async (userId) => {
    return user.findByIdAndDelete(userId);
};

// update details
const UpdateUser = async (userId, updateBody) => {
    return user.findByIdAndUpdate(userId, { $set: updateBody });

}


module.exports = {
    createUser,
    getuserlist,
    getUserById,
    deleteUser,
    UpdateUser
}