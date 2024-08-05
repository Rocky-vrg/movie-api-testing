/* const sinon = require('sinon');
const movieservice = require('../src/movieservice');

describe('Test movie service', () => {
  it('should save movie and return that object', (done) => {
    let movie = {
      movieName: 'Sherlock Holmes',
      director: 'Franklin',
      rating: '10',
      id: 7,
    };
    var create = sinon.stub(movieservice, 'saveMovieDetails');
    movieservice.saveMovieDetails(movie, (err, results) => {});
    sinon.assert.calledOnceWithMatch(create, movie);
    done();
    create.restore();
  });
  it('should return all movies', (done) => {
    var getAll = sinon.stub(movieservice, 'getMovies');
    movieservice.getMovies((err, results) => {});
    sinon.assert.calledOnce(getAll);
    done();
    getAll.restore();
  });
  it('should return movie given the movie id', (done) => {
    var findById = sinon.stub(movieservice, 'getMovieById');
    movieservice.getMovieById((err, results) => {});
    sinon.assert.calledOnce(findById);
    done();
    findById.restore();
  });
});
 */
// test('sum add two number',()=>{
//   expect(2+2).toBe(4)
// })

// test('object assignment',()=>{
//   const n = null
//   const data={one:1}
//   data['two']=2
//   expect(data).toBeTruthy()
//   expect(n).toBeTruthy()
// })


//  function myfunction(input){
//   if(typeof input!=='number'){
//     throw new Error('innvalid input')
//   }
  
// }

// test('',()=>{
// expect(()=>{
//   myfunction("hell")
// }).toThrow()
// })

// test("just to",()=>{
//   expect(1).toBe(1)
// })

// const supertest = require('supertest');
// const app = require('../../src/app'); 
// const jwt = require('jsonwebtoken');
// const config=require('../../src/config/config')
// const request=supertest(app)


// describe('Movie API', () => {
//   let token;

//   beforeAll(async () => {
//     // Signup a new user
//     const signupResponse = await request(app)
//       .post('/api/v1/auth/signup')
//       .send({
//         email: 'example@gmail.com',
//         password: 'test123',
//         // confirmPassword: 'TestPassword123',
//       });
    
//     expect(signupResponse.statusCode).toEqual(201);
//     expect(signupResponse.body.status).toBe('success');
    
//     // Signin to get the token
//     const signinResponse = await request(app)
//       .post('/api/v1/auth/signin')
//       .send({
//         email: 'example@gmail.com',
//         password: 'test123',
//       });

//     expect(signinResponse.statusCode).toEqual(200);
//     expect(signinResponse.body.status).toBe('success');
//     token = signinResponse.body.AccessToken;
//   });

//   it('should get movies with a valid token', async () => {
//     const res = await request(app)
//       .get('/api/v1/movie')
//       .set('Authorization', `Bearer ${token}`);

//     expect(res.statusCode).toEqual(200);
//     expect(res.body.status).toBe('success');
//     expect(res.body.data).toHaveProperty('movies');
//   });

//   it('should return 401 without a token', async () => {
//     const res = await request(app).get('/api/v1/movie');

//     expect(res.statusCode).toEqual(401);
//   });

//   it('should return 401 with an invalid token', async () => {
//     const res = await request(app)
//       .get('/api/v1/movie')
//       .set('Authorization', `Bearer invalidToken`); // Invalid token

//     expect(res.statusCode).toEqual(401);
//   });
// });

// it("gets the test endpoint", async done => {
//   const response = await request.get("/api/v1/movie");

//   expect(response.status).toBe(200);
//   expect(response.body.message).toBe("Movie retrieved Successfully");
//   done();
// });

// import {describe,it,test} from jest 

// const mongoose=require("mongoose")
// const databasename="test-jest"

// beforeAll(async()=>{
// const url=`mongodb://localhost:27017/${databasename}`
// await mongoose.connect(url)
// // console.log(url);

// })

// afterAll(async () => {
//   await mongoose.connection.close();
// });

// describe('GET /', () => {
//   it('should respond with a status code of 200', async () => {
//     const res = await request.get('/');
    
//     expect(res.statusCode).toEqual(200);
//     expect(res.text).toBe('Hello Movies');
//   });
// });


// // jestGlobalSetup.js
// const mongoose = require('mongoose');
// const { MongoMemoryServer } = require('mongodb-memory-server');

// let mongoServer;

// module.exports = async () => {
//   mongoServer = await MongoMemoryServer.create();
//   const uri = mongoServer.getUri();
//   process.env.MONGO_URI = uri; // Store the URI in an environment variable

//   // Connect to the in-memory database
//   await mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };



// // jestGlobalTeardown.js
// const mongoose = require('mongoose');

// module.exports = async () => {
//   await mongoose.connection.dropDatabase();
//   await mongoose.connection.close();
//   await mongoServer.stop();
// };


// // jest.config.js
// module.exports = {
//   globalSetup: './jestGlobalSetup.js',
//   globalTeardown: './jestGlobalTeardown.js',
//   testEnvironment: 'node',
// };