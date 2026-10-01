import jwt from 'jsonwebtoken'

const getAccessSecret = () => process.env.JWT_ACCESS_SECRET || process.env.JWT_SECRET || 'default_access_secret_key'
const getRefreshSecret = () => process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET || 'default_refresh_secret_key'

export const signAccessToken = (userId) =>
  jwt.sign({ sub: userId }, getAccessSecret(), { expiresIn: '15m' })

export const signRefreshToken = (userId) =>
  jwt.sign({ sub: userId }, getRefreshSecret(), { expiresIn: '7d' })

export const verifyAccessToken = (token) =>
  jwt.verify(token, getAccessSecret())

export const verifyRefreshToken = (token) =>
  jwt.verify(token, getRefreshSecret())

