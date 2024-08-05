// const express = require('express')
// const dateFormat = require('date-format');
// const morgan = require('morgan');
// const config = require("./config/config");
// const app = express();
// const moviesRouter = require("./routes/movierouter");

// const swaggerUI = require('swagger-ui-express')
// const YAML = require('yamljs')
// const swaggerDoc = YAML.load('./api-docs/swagger.yaml');

// morgan.token('time', () => dateFormat.asString(dateFormat.ISO8601_FORMAT, new Date())); // Both morgan and log4js are configured to same date format, so that log reading is meaningful and not confusing due to different date formats
// app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use("/api/v1/movies", moviesRouter);
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// const server = app.listen(config.PORT, () => {
//   console.log('Listening on port', config.PORT);
// });

// module.exports = server;

const express = require('express');
require('express-async-errors');
const config = require('./config/config');
const route = require('./routes/movierouter');
const Notfound = require('./middleware/notFound');
const errorHandler = require('./middleware/error');
const authRoutes = require('./routes/authRoute');
const requireAuth = require('./middleware/authMiddleware');
const cors=require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./docs/swaggeroption');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  console.log('hello movie');
  res.status(200).send('Hello Movies')
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


app.use('/api/v1/auth', authRoutes);

app.use('/api/v1/movie', requireAuth, route);

app.use(Notfound);
app.use(errorHandler);

module.exports = app;
