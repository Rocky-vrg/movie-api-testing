const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const validate = require('../middleware/reqSchemaValidate');
const { signinSchema, signupSchema } = require('../validations/authValidation');

router.route('/signup').post(validate(signupSchema), authController.signup);

router.route('/signin').post(validate(signinSchema), authController.signin);

router.route('/refresh_token').post(authController.signUsingRefreshToken);

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: The authentication managing API
 */

/**
 * @swagger
 * /api/v1/auth/signup:
 *   post:
 *     summary: User sign up
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: User email
 *               password:
 *                 type: string
 *                 description: User password
 *             example:
 *               email: user@example.com
 *               password: password123
 *     responses:
 *       201:
 *         description: The user was successfully signed up
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 201
 *                 message:
 *                   type: string
 *                   example: Successfully signed-up
 *                 data:
 *                   type: object
 *                   properties:
 *                     AccessToken:
 *                       type: string
 *                     RefreshToken:
 *                       type: string
 *       400:
 *         description: User already exists
 */


/**
 * @swagger
 * /api/v1/auth/signin:
 *   post:
 *     summary: User sign in
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: User email
 *               password:
 *                 type: string
 *                 description: User password
 *             example:
 *               email: user@example.com
 *               password: password123
 *     responses:
 *       200:
 *         description: The user was successfully signed in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Successfully signed-in
 *                 data:
 *                   type: object
 *                   properties:
 *                     AccessToken:
 *                       type: string
 *                     RefreshToken:
 *                       type: string
 *       401:
 *         description: Invalid email or password
 */


/**
 * @swagger
 * /api/v1/auth/refresh_token:
 *   post:
 *     summary: Generate new access token using refresh token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *                 description: Refresh token
 *             example:
 *               token: refreshTokenExample123
 *     responses:
 *       200:
 *         description: New access token generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Successfully created AccesToken using Refresh token
 *                 data:
 *                   type: object
 *                   properties:
 *                     AccessToken:
 *                       type: string
 *       401:
 *         description: Invalid refresh token
 */

