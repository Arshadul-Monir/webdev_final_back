const sqlpassword = require('./env_variable')


const dbName = "final-backend";
const dbUser = "postgres";
const dbPwd = sqlpassword;



module.exports = {
  dbName,
  dbUser,
  dbPwd,
};
