const { StationaryService } = require("../services");

// crate  Stationary

const Createstationary = async (req, res) => {
     try {
          const reqBody = req.body;

          const Stationary = await StationaryService.CreateStationary(reqBody);

          if (!Stationary) {
               throw new Error("Someting is Wrong , Please  try again later !...");
          }

          res.status(200).json({
               success: true,
               message: "Data successfully add ...",
               data: { Stationary }
          })
     }
     catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

//stationary list
const GetStationaryList = async (req, res) => {
     try {
          const GetList = await StationaryService.GetStationaryList(req, res);

          res.status(200).json({
               success: true,
               message: "SuccessFully All Stationarys list Get.....",
               data: GetList,
          })
     } catch (error) {
          res.status(400).json({ success: false, message: error.message })
     }
}

/** delete Stationary list  */

const DeleteStationary = async (req, res) => {
     try {
          const stationaryid = req.params.stationaryid;
          const stationaryIddel = await StationaryService.StationaryId(stationaryid);
          if (!stationaryIddel) {
               throw new Error("Stationary Iteam Not Found....");
          }

          await StationaryService.DeleteStationary(stationaryid);

          res.status(200).json({
               success: true,
               message: "Stationary Data SuccessFully Deleteded.....",
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          })
     }
}

/** Stationary details update by id */
const updateStationaryDetails = async (req, res) => {
     try {
          const stationaryid = req.params.stationaryid;
          const stationaryExists = await StationaryService.StationaryId(stationaryid);
          if (!stationaryExists) {
               throw new Error("Stationary data not found!");
          }

          await StationaryService.UpdateStationary(stationaryid, req.body);

          res.status(200).json({
               success: true,
               message: "Stationary details update successfully!"
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};
// get Stationary details
const getStationaryDetails = async (req, res) => {
     try {
          const stationaryid = req.params.stationaryid
          const getDetails = await StationaryService.StationaryId(stationaryid);
          if (!getDetails) {
               throw new Error("Stationary not found!");
          }

          res.status(200).json({
               success: true,
               message: "Stationary details get successfully!",
               data: getDetails,
          });
     } catch (error) {
          res.status(400).json({ success: false, message: error.message });
     }
};

module.exports = {
     Createstationary,
     GetStationaryList,
     DeleteStationary,
     updateStationaryDetails,
     getStationaryDetails
}