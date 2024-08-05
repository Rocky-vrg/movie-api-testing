// Get the config either from environment variables or pick the default
// const config = {
//   PORT: process.env.PORT || "5000",
// }

// module.exports = config;

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const config = {
  PORT: process.env.PORT || 5000,
  HOST: process.env.HOST || 'orLocalHost',
  MONGO_URL: process.env.MONGO_URL,
  // MONGOOSE_OPTION: {
  //       useCreateIndex:true,
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // useFindAndModify:false
  // },
  JWT_SECRET: process.env.JWT_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
};

module.exports = config;
