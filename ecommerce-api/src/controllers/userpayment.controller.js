const { UserPaymentService } = require("../services");

// crate  UserPaymet

const CreatePayment = async (req, res) => {
     try {
          const reqBody = req.body;

          const payment = await UserPaymentService.createPayment(reqBody);

          if (!payment) {
               throw new Error("Someting is Wrong , Please  try again later !...");
          }

          res.status(200).json({
               success: true,
               message: "Data successfully add ...",
               data: { payment }
          })
     }
     catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

//UserPaymet list
const PaymentList = async (req, res) => {
     try {
          const GetList = await UserPaymentService.GetPaymentyList(req, res);

          res.status(200).json({
               success: true,
               message: "SuccessFully All Payment list Get.....",
               data: GetList,
          })
     } catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

/** delete UserPaymet list  */

const DeletePayment = async (req, res) => {
     try {
          const paymentId = req.params.paymentId;
          const payment = await UserPaymentService.PaymentId(paymentId);
          if (!payment) {
               throw new Error("Payment Iteam Not Found....");
          }

          await UserPaymentService.DeletePayment(paymentId);

          res.status(200).json({
               success: true,
               message: "Payment Data SuccessFully Deleteded.....",
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          })
     }
}


/** UserPaymet details update by id */
const updatePayment= async (req, res) => {
     try {
          const paymentId = req.params.paymentId;
          const Exists = await UserPaymentService.PaymentId(paymentId);
          if (!Exists) {
               throw new Error("Payment data not found!");
          }

          await UserPaymentService.UpdatePayment(paymentId, req.body);

          res.status(200).json({
               success: true,
               message: "Payment details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

// get UserPaymet details
const PaymentId = async (req, res) => {
     try {
          const paymentId = req.params.paymentId
          const getDetails = await UserPaymentService.PaymentId(paymentId);
          if (!getDetails) {
               throw new Error("Payment not found!");
          }

          res.status(200).json({
               success: true,
               message: "Payment details get successfully!",
               data: getDetails,
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

module.exports = {
     CreatePayment,
     PaymentList,
     PaymentId,
     DeletePayment,
     updatePayment
}