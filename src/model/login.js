const {fetchOne, fetch}  = require("../utils/pg")


const getUserByemail = 'select * from users where email = $1';

const findbyemail = (email) => fetchOne(getUserByemail, email);

module.exports = {
 findbyemail,

}