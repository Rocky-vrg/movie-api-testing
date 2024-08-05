// const movieRouter = require("./movierouter");

// module.exports = movieRouter;

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');
const model = require('./model/moviemodel');
const movieData = require('../data/movies.json');

const start = async () => {
  try {
    await mongoose
      .connect(config.MONGO_URL /* config.MONGOOSE_OPTION */)
      .then(() => console.log('Mongodb Connected'));
    // await model.deleteMany()
    const count = await model.estimatedDocumentCount();
    if (count === 0) {
      await model
        .create(movieData.movies)
        .then(() => console.log('Data Uploaded'));
    }
    app.listen(config.PORT, config.HOST, () => {
      console.log(
        `Server is running on portNo ${config.PORT} in ${config.HOST}`,
      );
    });
    console.log('Success');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
