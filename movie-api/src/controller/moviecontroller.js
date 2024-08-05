// //import service layer

// const getMovies = (done) => {
// //call service method getMovies method

// }

// const getMovieById = (movieId, done) => {
//     //call service method getMovieById method

// }

// const saveMovieDetails = (movieDetails, done) => {
//   //call service method saveMovieDetails method

// }

// const updateMovieDetails = (movieId, movieDetails, done) => {
//   //call service method updateMovieDetails method

// }

// const deleteMovieById = (movieId, done) => {
//   //call service method deleteMovieById method

// }

// module.exports = {
//   getMovies, getMovieById, saveMovieDetails, updateMovieDetails, deleteMovieById
// }
//{getMovies,saveMovieDetails,updateMovieDetails,deleteMovieById,getMoviesById}
const movieServices = require('../services/movieservice');
const AppError = require('../utils/appError');
const model=require('../model/moviemodel')

const getMovies = async (req, res) => {
  const movies = await movieServices.getMovies();
  res.status(200).json({
    status: 'success',
    statusCode: 200,
    message: 'Movies retrieved successfully',
    data: { movies },
  });
};

const saveMovieDetails = async (req, res,next) => {
  const existingMovie=await model.findOne({id:req.body.id})
  if(existingMovie){
    return next(new AppError('MovieId already exist', 404));
  }

  const newMovies = await movieServices.saveMovieDetails(req.body);
  res.status(200).json({
    status: 'success',
    statusCode: 200,
    message: 'Movie saved Successfully',
    data: { movie: newMovies },
  });
};

const updateMovieDetails = async (req, res, next) => {
  const { movieId } = req.params;

  let updateMovies;
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(movieId);
  try {
    if (isObjectId) {
      updateMovies = await movieServices.updateMovieDetailsByMongoId(
        req.body,
        movieId,
      );
    } else {
      updateMovies = await movieServices.updateMovieDetails(req.body, movieId);
    }

    if (!updateMovies) {
      return next(new AppError('Movie not Found', 404));
    }
    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Movie updated Successfully',
      data: { movie: updateMovies },
    });
  } catch (error) {
    next(error);
  }

  // const updateMovies = await movieServices.updateMovieDetails(req.body, req.params.movieId)
  // if (!updateMovies) {
  //   return next(new AppError('Movie not Found', 404))
  // }
  // res.status(200).json({
  //   status: 'success',
  //   statusCode: 200,
  //   message: "Movie updated Successfully",
  //   data: { movie: updateMovies }
  // })
};

const deleteMovieById = async (req, res, next) => {
  const { movieId } = req.params;

  let deletedmovies;
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(movieId);

  try {
    if (isObjectId) {
      deletedmovies = await movieServices.deleteMovieByMongoId(movieId);
    } else {
      deletedmovies = await movieServices.deleteMovieById(movieId);
    }

    if (!deletedmovies) {
      return next(new AppError('Movie not Found', 404));
    }

    {
      res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: 'Movie deleted Successfully',
        data: { movie: deletedmovies },
      });
    }
  } catch (error) {
    next(error);
  }
};
// const deletedmovies = await movieServices.deleteMovieById(req.params.movieId)
// if (!deletedmovies) {
//   return next(new AppError('Movie not Found', 404))
// }
// {
//   res.status(200).json({
//     status: 'success',
//     statusCode: 200,
//     message: "Movie deleted Successfully",
//     data: { movie: deletedmovies }
//   })
// }

const getMoviesById = async (req, res, next) => {
  const { movieId } = req.params;

  let movies;
  const isObjectId = /^[0-9a-fA-F]{24}$/.test(movieId);

  try {
    if (isObjectId) {
      movies = await movieServices.getMoviesByMongoId(movieId);
    } else {
      movies = await movieServices.getMoviesById(movieId);
    }

    if (!movies) {
      return next(new AppError('Movie not Found', 404));
    }

    {
      res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: 'Movie retrieved Successfully',
        data: { movie: movies },
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMovies,
  saveMovieDetails,
  updateMovieDetails,
  deleteMovieById,
  getMoviesById,
};
