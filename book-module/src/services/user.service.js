const { user } = require("../models");

/** create user
* @param {object} reqBody
* @returns {Promise<user>}
*/

const createUser = async (reqBody) => {
    return user.create(reqBody);
}

// /**
//  * get User list
//  * @param {object} filter
//  * @param {boject} options
//  * @returns {Promise<user>}
//  */

// const getUserList = async (filter , options) => {
//     const skip = (Number(options.page || 1) -1 ) * Number(options.limit || 10);

//     return user.find(filter).skip(skip).limit(options.limit).select("- password");
// };

module.exports = {
    createUser,
}