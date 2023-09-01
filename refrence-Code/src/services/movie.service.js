const { Movie } = require("../models");

//create Movie

const CreateMovie = async (reqBody) => {
    return Movie.create(reqBody);
}


/** get Movie list  */

const GetMovieList = async (req, res) => {
    return Movie.find(
      // {$or :[{is_active :true, Movie_ticket_price :100 }]}
      );
  }

/** Get Movie id */
  const MovieId = async (movieid) => {
    return Movie.findById(movieid);
}

/** Delete Movie */

const  DeleteMovie = async (movieid) =>{
return  Movie.findByIdAndDelete(movieid);
}

// update details
const UpdateMovie = async (movieid, updateBody) => {
  return Movie.findByIdAndUpdate(movieid, { $set: updateBody });
}
module.exports = {
      CreateMovie,
      GetMovieList,
      MovieId,
      DeleteMovie,
      UpdateMovie
}