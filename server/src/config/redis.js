import Redis from 'ioredis'

let redis = null

if (process.env.REDIS_URL) {
  redis = new Redis(process.env.REDIS_URL, {
    maxRetriesPerRequest: null,
    lazyConnect: true,
  })
  redis.on('connect', () => console.log('Redis connected'))
  redis.on('error', err => console.warn('Redis warning:', err.message))
} else {
  redis = {
    get: async () => null,
    set: async () => null,
    del: async () => null,
    on: () => {},
  }
}

export { redis }

