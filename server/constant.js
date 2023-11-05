const dotenv = require("dotenv");
dotenv.config();
const { SERVER_PORT, MONGO_DB } = process.env;
module.exports = { SERVER_PORT, MONGO_DB };
