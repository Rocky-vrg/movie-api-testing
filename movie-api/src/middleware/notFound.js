const notFound = (req, res, next) =>
  res.status(404).json({
    status: 'Failure',
    statusCode: 404,
    message: 'Route not found',
  });
// const notFound = (req, res) => res.status(404).send('Route does not exist')

// module.exports = notFound

module.exports = notFound;
