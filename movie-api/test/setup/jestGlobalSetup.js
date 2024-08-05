// const { MongoMemoryServer } = require('mongodb-memory-server');
// let mongod;
 // mongod = await MongoMemoryServer.create();
 //  const databaseName="Test-Series"
 // process.env.MONGO_URI = `${mongod.getUri()}${databaseName}`;
// global.__MONGOD__ = mongod



// const mongoose = require('mongoose');
// const databasename="test"


//  const mongoD = async () => {
//   try {
//     const url=`mongodb://localhost:27017/${databasename}`
//     await mongoose.connect(url);
//     console.log(url);
    
//   } catch (error) {
//     console.error(`error in connecting to test-mongodb`,error);
//     throw error
//   }
 
// };

// module.exports=mongoD















// module.exports = async () => {
//   const url = 'mongodb://localhost:27017/test_database';
//   try {
//     await mongoose.connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     throw error;
//   }
// };
// beforeAll(async()=>{
//   const url=`mongodb://localhost:27017/${databasename}`
//   await mongoose.connect(url)
//   })