
const express =  require("express");
const {MovieController} = require("../../controllers");
const validate = require("../../middlewares/validate")
const {MovieValidation} =require("../../validations");

const  routes = express.Router();


//create movie
 routes.post("/creat-movie",
  validate(MovieValidation.CreateMovie),
    MovieController.createMovie
 );

/** get Movie list */
routes.get("/movie-list",
     MovieController.GetmovieList

);

/**Delete Movie  */
routes.delete('/delete-movie/:movieid',
    MovieController.DeleteMovie
);

// upadate book details

routes.put("/update-movie/:movieid",
MovieController.updateMovieDetails
)

// get one Movie  details
routes.get("/movielist/:movieid",
    MovieController.getMovieDetails
)
module.exports =routes;