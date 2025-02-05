import { createClient } from "redis"

const redis = createClient ({
  url : "rediss://default:ASigAAIjcDE1ZjgzOTkwODg0YjE0Y2YyOTkxMmM0NjU5NWQ0NTE1MnAxMA@first-walrus-10400.upstash.io:6379"
});

redis.on("error", function(err) {
  throw err;
});
await redis.connect()

export default redis

