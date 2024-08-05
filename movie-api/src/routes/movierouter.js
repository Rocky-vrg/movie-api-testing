const express = require('express');
const router = express.Router();

const movieController = require('../controller/moviecontroller');

const validate = require('../middleware/reqSchemaValidate');
const {
  getMoviesBySchema,
  deleteMoviesBySchema,
  updateMovieBySchema,
} = require('../validations/userValidation');
const requireAuth = require('../middleware/authMiddleware');

router
  .route('/')
  .get(requireAuth, movieController.getMovies)
  .post(requireAuth, movieController.saveMovieDetails);

router
  .route('/:movieId')
  .get(requireAuth, validate(getMoviesBySchema), movieController.getMoviesById)
  .patch(
    requireAuth,
    validate(updateMovieBySchema),
    movieController.updateMovieDetails,
  )
  .delete(
    requireAuth,
    validate(deleteMoviesBySchema),
    movieController.deleteMovieById,
  );

module.exports = router;





/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: The movies managing API
 */

/**
 * @swagger
 * /api/v1/movie:
 *   get:
 *     summary: Returns a list of movies
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: The list of movies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */

  /**
   * @swagger
   * /api/v1/movie:
   *   post:
   *     summary: Create a new movie
   *     tags: [Movies]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Movie'
   *     responses:
   *       200:
   *         description: The movie was successfully created
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Movie'
   *       500:
   *         description: Some server error
   */
  

/**
 * @swagger
 * /api/v1/movie/{movieId}:
 *   get:
 *     summary: Get the movie by id
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: movieId
 *         schema:
 *           type: string
 *         required: true
 *         description: The movie id
 *     responses:
 *       200:
 *         description: The movie description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: The movie was not found
 */

  /**
   * @swagger
   * /api/v1/movie/{movieId}:
   *   patch:
   *     summary: Update the movie by the id
   *     tags: [Movies]
   *     parameters:
   *       - in: path
   *         name: movieId
   *         schema:
   *           type: string
   *         required: true
   *         description: The movie id
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Movie'
   *     responses:
   *       200:
   *         description: The movie was updated
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Movie'
   *       404:
   *         description: The movie was not found
   *       500:
   *         description: Some error happened
   */
  
  /**
   * @swagger
   * /api/v1/movie/{movieId}:
   *   delete:
   *     summary: Remove the movie by id
   *     tags: [Movies]
   *     parameters:
   *       - in: path
   *         name: movieId
   *         schema:
   *           type: string
   *         required: true
   *         description: The movie id
   *     responses:
   *       200:
   *         description: The movie was deleted
   *       404:
   *         description: The movie was not found
   */
  















































































// //import all the modules required

// /**
//  * API to get the details of all movies
//  * EFFECTIVE URL: GET /api/v1/movies
//  */
// router.get("/", (req, res) => {
//   try {
//     //calling controller method and passing the parameters
//     //return the response as per error or result coming from controller
//     movieController.getMovies((err, results) => {
//     })
//   } catch (err) {

//   }
// });
// /**
//  * API to get the details of specific movie
//  * EFFECTIVE URL: GET /api/v1/movie/:movieId
//  */
// //
// router.get("/:movieId", (req, res) => {
//   try {
//     //retreive moviedId from req.params

//     //calling controller method and passing the parameters
//     //return the response as per error or result coming from controller
//     movieController.getMovieById(movieId, (err, results) => {

//     });

//   } catch (err) {

//   }
// });

// /**
//  * API to save new movie
//  * EFFECTIVE URL: POST /api/v1/movies
//  */
// router.post("/", (req, res) => {
//   try {
//     //retreive movieDetails from req.body
//     const movieDetails = {

//     }
//      //calling controller method and passing the parameters
//     //return the response as per error or result coming from controller
//     movieController.saveMovieDetails(movieDetails, (err, results) => {

//     });

//   } catch (err) {

//   }
// });

// /**
//  * API to edit movie detail
//  * EFFECTIVE URL: PATCH /api/v1/movies/:movieId
//  */
// router.patch("/:movieId", (req, res) => {
//   try {
//      //retreive moviedId from req.params

//     //retreive movieDetails from req.body
//     const movieDetails = {

//     }
//     //calling controller method and passing the parameters
//     //return the response as per error or result coming from controller
//     movieController.updateMovieDetails(movieId, movieDetails, (err, results) => {

//     });

//   } catch (err) {

//   }
// });

// /**
//  * API to delete movie
//  * EFFECTIVE URL: DELETE /api/v1/movies/:movieId
//  */
// router.delete("/:movieId", (req, res) => {
//   try {
//      //retreive moviedId from req.params

//        //calling controller method and passing the parameters
//       //return the response as per error or result coming from controller
//     movieController.deleteMovieById(movieId, (err, results) => {
//     })

//   } catch (err) {

//   }
// });

// module.exports = router;
