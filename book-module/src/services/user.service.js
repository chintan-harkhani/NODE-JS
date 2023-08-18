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

const getuserlist = async (req,res) => {

    return user.find();
};

module.exports = {
    createUser,
    getuserlist
}