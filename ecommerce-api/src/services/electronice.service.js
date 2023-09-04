const { electronice } = require("../models");
/** create electronice
* @param {object} reqBody
* @returns {Promise<user>}
*/
const createElectronice = async (reqBody) => {
    return electronice.create(reqBody);
}

/**
 * get electronice list
* @param {object} filter
* @param {object} options
* @returns {Promise<user>}
*/

const getelectronicelist = async (req, res) => {

    return electronice.find(
        // { $or: [{ is_active: true, age: 19 }] }
    );
};

/**
 * Get electronice details by id
 * @param {ObjectId} userId
 * @returns {Promise<user>}
 */
const getElectroniceById = async (electroniceId) => {
    return electronice.findById(electroniceId)
};

/**
 * Delete electronice
 * @param {ObjectId} electroniceId
 * @returns {Promise<user>}
 */
const deleteElectronice= async (electroniceId) => {
    return electronice.findByIdAndDelete(electroniceId);
};

// update electronice details
const Updateelectronice = async (electroniceId, updateBody) => {
    return electronice.findByIdAndUpdate(electroniceId, { $set: updateBody });

}


module.exports = {
    createElectronice,
    getelectronicelist,
    getElectroniceById,
    deleteElectronice,
    Updateelectronice

}
