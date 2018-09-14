var redis = require('redis');
var redisClient = redis.createClient({host : '10.16.1.105', port : 6379});

redisClient.on('ready', function() {
 console.log("Redis is ready");
});

redisClient.on('error', function() {
 console.log("Error in Redis");
});


redisClient.set("transaksi","nodejs")

redisClient.get("transaksi", function(err,reply) {
 console.log(err);
 console.log(reply);
});


redisClient.hmset("idtrx",123456789,"stat'",1, function(err, reply){
 console.log(err);
 console.log(reply);
});

redisClient.hgetall("tools",function(err,reply) {
 console.log(err);
 console.log(reply);
});