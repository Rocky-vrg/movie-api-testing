const jwt = require('jsonwebtoken');
const User = require('../model/authModel');
const config = require('../config/config');
const Apperror = require('../utils/appError');

const requireAuth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return next(new Apperror('No token, authorization denied', 401));
  }
  try {
    const decoded = jwt.verify(token.split(' ')[1], config.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (err) {
    return next(new Apperror('Token is not valid', 401));
  }
};
module.exports = requireAuth;
