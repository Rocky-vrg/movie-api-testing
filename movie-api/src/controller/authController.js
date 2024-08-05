const authService = require('../services/authservice');
const AppError = require('../utils/appError');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, config.JWT_SECRET, { expiresIn: '7d' });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, config.REFRESH_TOKEN_SECRET, {
    expiresIn: '365d',
  });
};

const signup = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userExists = await authService.findUserByEmail(email);
    if (userExists) {
      return next(new AppError('User already exists', 400));
    }

    const user = await authService.createUser({ email, password });

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    res.status(201).json({
      status: 'success',
      statusCode: 201,
      message: 'Successfully signed-up',
      data: { AccessToken: accessToken, RefreshToken: refreshToken },
    });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await authService.findUserByEmail(email);
    if (!user || !(await user.comparePassword(password))) {
      return next(new AppError('Invalid email or password', 401));
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Successfully signed-in',
      data: { AccessToken: accessToken, RefreshToken: refreshToken },
    });
  } catch (error) {
    next(error);
  }
};

const signUsingRefreshToken = async (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    return next(new AppError('Refresh token is required', 401));
  }
  try {
    const decoded = jwt.verify(token, config.REFRESH_TOKEN_SECRET);
    const newAccessToken = generateAccessToken(decoded.userId);
    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Successfully created AccesToken using Refresh token',
      data: { AccessToken: newAccessToken },
    });
  } catch (error) {
    return next(new AppError('Invalid refresh token', 401));
  }
};

module.exports = { signin, signup, signUsingRefreshToken };
