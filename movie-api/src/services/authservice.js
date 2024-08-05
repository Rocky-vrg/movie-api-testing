const User = require('../model/authModel');



/**
 * @param {string} email
 * @return {Promise} 
 */
const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};




/**
 * @param {string} email
 * @param {salted-string} password
 * @return {Promise} 
 */
const createUser = async (email, password) => {
  const user = new User(email, password);
  return await user.save();
};





module.exports = { findUserByEmail, createUser };
