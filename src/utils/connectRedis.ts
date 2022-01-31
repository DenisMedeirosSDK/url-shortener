import Redis from 'ioredis';
import { promisify } from 'util';

export const redis = new Redis();

function getRedis(value: string): Promise<any> {
  const syncRedisGet = promisify(redis.get).bind(redis);
  return syncRedisGet(value);
}

function setRedis(key: string, value: string) {
  const syncRedisSet = promisify(redis.set).bind(redis);
  return syncRedisSet(key, value);
}

export { getRedis, setRedis };
