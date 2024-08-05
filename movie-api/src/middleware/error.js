// const AppError=require('../utils/appError')

const errorHandler = (err, req, res, next) => {
  console.log('error middleware reached', err);
  err.status = err.status || 'error';
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    status: err.status,
    statusCode: err.statusCode,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = errorHandler;
