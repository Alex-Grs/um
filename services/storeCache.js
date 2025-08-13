const CACHE_TIMESTAMP_SUFFIX = 'CacheTimestamp'

/**
 * Create two properties in the state
 * One is the value to cache
 * The other is the timestamp
 *
 * @param propertyName the property to create in state
 */
export const createCachableState = (propertyName) => {
  return {
    [propertyName]: null,
    [`${propertyName}${CACHE_TIMESTAMP_SUFFIX}`]: null
  }
}

/**
 * Set a cachable property in state
 * Store the actual value and the update date in the associated timestamp property
 *
 * @param state store state
 * @param propertyName the property to set
 * @param value the actual value to store
 */
export const setCachableState = (state, propertyName, value) => {
  state[propertyName] = value
  state[`${propertyName}${CACHE_TIMESTAMP_SUFFIX}`] = Date.now()
}

/**
 * Check if the cache of a property is valid
 * Based on actual value, not falsy, and cache timestamp, under the ttl value
 *
 * @param state current store state
 * @param propertyName the property to check cache
 * @param ttl cache validity duration in seconds
 */
export const isCacheValid = (state, propertyName, ttl) => {
  return (
    state[propertyName] &&
    Date.now() - state[`${propertyName}${CACHE_TIMESTAMP_SUFFIX}`] < ttl * 1000
  )
}
