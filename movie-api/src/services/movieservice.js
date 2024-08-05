// //import axios module

// //After starting the JSOn server check the port on which is running accordingly change
// //the port in url given below

// //This method will get all movies from json server
// const getMovies = (done) => {
//   // This url can be used - axios.get("http://localhost:3000/movies")

// }

// //This method will get specific movie id from json server
// const getMovieById = (movieId, done) => {
//   // This url can be used- axios.get(`http://localhost:3000/movies/${movieId}`)

// }
// //This method will save Movie details in Json server
// const saveMovieDetails = (movieDetails, done) => {
//   //This url can be used  -  axios.post(`http://localhost:3000/movies`, movieDetails)

// }

// //This method will update MovieDetails in Json Server
// const updateMovieDetails = (movieId, movieDetails, done) => {
//   //This url can be used - axios.patch(`http://localhost:3000/movies/${movieId}`, movieDetails)

// }

// //This method will delete specific movie from Json Server
// const deleteMovieById = (movieId, done) => {
//   //This url can be used -  axios.delete(`http://localhost:3000/movies/${movieId}`)

// }

// module.exports = {
//   getMovies, getMovieById, saveMovieDetails, deleteMovieById, updateMovieDetails
// }

const model = require('../model/moviemodel');



/**
 * @returns {Promise<User>}
 */
const getMovies = async () => {
  return await model.find({});
};



/**
 * @param {Object} movieData
 * @returns {Promise<User>}
 */
const saveMovieDetails = async (movieData) => {
  const newMovie = new model(movieData);
  return await newMovie.save();
};



/**
 * @param {ObjectId} movieId
 * @param {Object} movieData
 * @returns {Promise<model>}
 */
const updateMovieDetails = async (movieData, movieId) => {
  return await model.findOneAndUpdate({ id: movieId }, movieData, {
    new: true,
    runValidators: true,
  });
};


/**
 * @param {MongoId} movieId
 * @param {Object} movieData
 * @returns {Promise<model>}
 */
const updateMovieDetailsByMongoId = async (movieData, movieId) => {
  return await model.findOneAndUpdate({ _id: movieId }, movieData, {
    new: true,
    runValidators: true,
  });
};


/**
 * @param {MongoId} movieId
 * @return {Promise<model>} 
 */
const deleteMovieByMongoId = async (movieId) => {
  return await model.findOneAndDelete({ _id: movieId });
};


/**
 * @param {ObjectId} movieId
 * @return {Promise<model>} 
 */
const deleteMovieById = async (movieId) => {
  return await model.findOneAndDelete({ id: movieId });
};


/**
 * @param {ObjectId} movieId
 * @return {Promise<model>} 
 */
const getMoviesById = async (movieId) => {
  return await model.findOne({ id: movieId });
};


/**
 * @param {MongoId} movieId
 * @return {Promise<model>} 
 */
const getMoviesByMongoId = async (movieId) => {
  return await model.findOne({ _id: movieId });
};

module.exports = {
  getMovies,
  saveMovieDetails,
  updateMovieDetails,
  deleteMovieById,
  getMoviesById,
  getMoviesByMongoId,
  deleteMovieByMongoId,
  updateMovieDetailsByMongoId,
};
