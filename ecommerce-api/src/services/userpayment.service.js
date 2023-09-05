const { UserPayment } = require("../models");

// create Userpayment
const createPayment = async (reqBody) => {
    return UserPayment.create(reqBody);
}



/** get Userpayment list  */

const GetPaymentyList = async (req, res) => {
    return UserPayment.find(
        // {$or : [{is_active : true}]}
        );
}

/** Get Userpayment id */
const PaymentId = async (paymentId) => {
    return UserPayment.findById(paymentId);
}

/** Delete Userpayment */

const DeletePayment= async (paymentId) => {
    return UserPayment.findByIdAndDelete(paymentId);
}

// update  Userpayment details
const UpdatePayment = async (paymentId, updateBody) => {
    return UserPayment.findByIdAndUpdate(paymentId, { $set: updateBody });
  }
module.exports = {
    createPayment,
    GetPaymentyList,
    PaymentId,
    DeletePayment,
    UpdatePayment
}