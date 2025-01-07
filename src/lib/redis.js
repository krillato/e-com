// lib/redis.js
import Redis from "ioredis";

const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1", // IP หรือ hostname ของ Redis server
  port: process.env.REDIS_PORT || 6379, // Port ของ Redis server
  password: process.env.REDIS_PASSWORD || "", // Password หากมี
});

export default redis;
