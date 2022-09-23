require('dotenv').config();

module.exports = {
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        // password: process.env.REDIS_PASSWORD,
        // max: 20,
        // idleTimeoutMillis: 30000,
        // connectionTimeoutMillis: 2000,
    },
};