import Redis from "ioredis";

// Modify your redis.js to include more robust connection handling
const redis = new Redis({
    host: '127.0.0.1', // or '127.0.0.1'
    port: 6379,
});

redis.on('connect', () => {
    console.log('Redis connected successfully');
});

redis.on('error', (err) => {
    console.error('Redis Connection Error', err);
});

export default redis;