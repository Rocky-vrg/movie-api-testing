const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Movie API',
      version: '1.0.0',
      description: 'A simple API for managing movies',
    },
    servers: [
      {
        url: 'http://localhost:6666', 
      },
    ], 
    components: {
      schemas: {
        Movie: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'The unique identifier for a movie',
              example: 1,
            },
            movieName: {
              type: 'string',
              description: 'The name of the movie',
              example: 'Titanic',
            },
            director: {
              type: 'string',
              description: 'The director of the movie',
              example: 'James Cameron',
            },
            rating: {
              type: 'number',
              description: 'The rating of the movie',
              example: 9.5,
            },
          },
          required: ['id', 'movieName', 'director', 'rating'],
        },
      },
    },
  },
  
  apis: ['./src/routes/authRoute.js','./src/routes/movierouter.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

module.exports = specs;