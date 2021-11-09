

exports.default = {

  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_ACCESS_TIME: process.env.JWT_ACCESS_TIME,
  JWT_REFRESH_TIME: process.env.JWT_REFRESH_TIME,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  DB_CONN_STRING: process.env.DB_CONN_STRING,
};
