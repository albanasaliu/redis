function redis_conn(){
    const { createClient } = require('redis');
    const config = require("./config");
    
    const client = createClient({
            host: config.redis.host,
            port: config.redis.port,
            //password: config.redis.password,
    });
    
    client.connect();
    
    client.on('error', err => {
        console.log('Error ' + err);
    });
    
    client.on('connect', function() {
        console.log('Redis Database connected'+'\n');
    });
    
    client.on('reconnecting', function() {
        console.log('Redis client reconnecting');
    });
    
    client.on('ready', function() {
        console.log('Redis client is ready');
    });
    
    client.on('end', function() {
        console.log('\nRedis client disconnected');
        console.log('Server is going down now...');
        process.exit();
    });
};

module.exports = redis_conn;