const express =  require("express");
const {UserAddressController} = require("../../controllers");
const { UseraddressValidation}  =require("../../validations");
const validate = require("../../middlewares/validate")

const  routes = express.Router();


//create address
 routes.post("/creat-address",
  validate(UseraddressValidation.Creataddress),
   UserAddressController.CreateAddress
 );

/** get address list */
routes.get("/list",
UserAddressController.AddressList

);
// get one address  details
routes.get("/addresslist/:addressId",
UserAddressController.getUserAddress
)

/**Delete address  */
routes.delete('/delete-address/:addressId',
    UserAddressController.Deleteaddress
);

// upadate address details

routes.put("/update-address/:addressId",
   UserAddressController.updateaddress
);
module.exports =routes;
