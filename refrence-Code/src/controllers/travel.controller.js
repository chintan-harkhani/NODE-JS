const { TravelService } = require("../services");


// crate travel

const CreateTravel = async (req, res) => {
     try {
          const reqBody = req.body;

          const Travel = await TravelService.createTravel(reqBody);

          if (!Travel) {
               throw new Error("Someting is Wrong , Please  try again later !...");
          }

          res.status(200).json({
               success: true,
               message: "Data successfully add ...",
               data: { Travel }
          })
     }
     catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

//travel list
const GetTravelList = async (req, res) => {
     try {
          const GetList = await TravelService.TravelList(req, res);

          res.status(200).json({
               success: true,
               message: "SuccessFully All Travel list Get.....",
               data: GetList,
          })
     } catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}


/** delete Travel list  */

const DeleteTravel = async (req, res) => {
     try {
          const travelId = req.params.travelid;
          const traveldel = await TravelService.TravelId(travelId);
          if (!traveldel) {
               throw new Error("Travel Iteam Not Found....");
          }

          await TravelService.DeleteTravel(travelId);

          res.status(200).json({
               success: true,
               message: "Travel Data SuccessFully Deleteded.....",
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          })
     }
}

/** Travel details update by id */
const updateTravelDetails = async (req, res) => {
     try {
          const travelid = req.params.travelid;
          const travelExists = await TravelService.TravelId(travelid);
          if (!travelExists) {
               throw new Error("Travel data not found!");
          }

          await TravelService.UpdateTravel(travelid, req.body);

          res.status(200).json({
               success: true,
               message: "Travel details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

// get Travel details
const getTravelDetails = async (req, res) => {
     try {
          const travelid = req.params.travelid
          const getDetails = await TravelService.TravelId(travelid);
          if (!getDetails) {
               throw new Error("Travel not found!");
          }

          res.status(200).json({
               success: true,
               message: "Travel details get successfully!",
               data: getDetails,
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

module.exports = {
     CreateTravel,
     GetTravelList,
     DeleteTravel,
     updateTravelDetails,
     getTravelDetails
}