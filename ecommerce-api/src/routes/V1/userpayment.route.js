const express =  require("express");
const {UserPaymentController} = require("../../controllers");
const { UserPaymentValidation}  =require("../../validations");
const validate = require("../../middlewares/validate")

const  routes = express.Router();


//create payment
 routes.post("/creat-payment",
  validate(UserPaymentValidation.CreateUserpayment),
  UserPaymentController.CreatePayment
 );

/** get payment list */
routes.get("/list",
UserPaymentController.PaymentList

);
// get one payment  details
routes.get("/paymentlist/:paymentId",
   UserPaymentController.PaymentId
)

/**Delete payment  */
routes.delete('/delete-payment/:paymentId',
   UserPaymentController.DeletePayment
);

// upadate payment details

routes.put("/update-payment/:paymentId",
   UserPaymentController.updatePayment
);
module.exports =routes;
