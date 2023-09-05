const { UseraddressService } = require("../services");

// crate  user address
const CreateAddress = async (req, res) => {
     try {
          const reqBody = req.body;

          const address = await UseraddressService.createaddress(reqBody);

          if (!address) {
               throw new Error("Someting is Wrong , Please  try again later !...");
          }

          res.status(200).json({
               success: true,
               message: "Data successfully add ...",
               data: { address }
          })
     }
     catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

//address list
const AddressList = async (req, res) => {
     try {
          const GetList = await UseraddressService.AddressList(req, res);

          res.status(200).json({
               success: true,
               message: "SuccessFully all user Address list Get.....",
               data: GetList,
          })
     } catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

/** delete Useraddress list  */

const Deleteaddress = async (req, res) => {
     try {
          const addressId = req.params.addressId;
          const exites = await UseraddressService.AddressId(addressId);
          if (!exites) {
               throw new Error("User address Iteam Not Found....");
          }

          await UseraddressService.DeleteAddress(addressId);

          res.status(200).json({
               success: true,
               message: "User Address Data SuccessFully Deleteded.....",
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          })
     }
}


/** user address details update by id */
const updateaddress = async (req, res) => {
     try {
          const addressId = req.params.addressId;
          const Exists = await UseraddressService.AddressId(addressId);
          if (!Exists) {
               throw new Error("User address data not found!");
          }

          await UseraddressService.UpdateAddress(addressId, req.body);

          res.status(200).json({
               success: true,
               message: "User address details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

// get user address details
const getUserAddress = async (req, res) => {
     try {
          const addressId = req.params.addressId
          const getDetails = await UseraddressService.AddressId(addressId);
          if (!getDetails) {
               throw new Error("User Address not found!");
          }

          res.status(200).json({
               success: true,
               message: "User Address details get successfully!",
               data: getDetails,
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

module.exports = {
     CreateAddress,
     AddressList,
     getUserAddress,
     Deleteaddress,
     updateaddress

}