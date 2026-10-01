// Server Version: 1.0.4 - VERCEL_SERVERLESS_READY
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import rateLimit from 'express-rate-limit'
import { connectDB } from './config/db.js'
import './config/passport.js'
import authRoutes    from './routes/auth.routes.js'
import profileRoutes from './routes/profile.routes.js'
import revisionRoutes from './routes/revision.routes.js'
import aiRoutes from './routes/ai.routes.js'
import supportRoutes from './routes/support.routes.js'
import sheetRoutes from './routes/sheet.routes.js'
import resourceRoutes from './routes/resource.routes.js'
import contestRoutes from './routes/contest.routes.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

app.use(helmet({ crossOriginResourcePolicy: false }))
app.use((req, res, next) => {
  res.header('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', '0');
  next();
});

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:3000'
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app') || !process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    return callback(null, true);
  },
  credentials: true,
}))

app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(passport.initialize())

// Ensure MongoDB is connected for incoming requests (Serverless & Standalone)
app.use(async (req, res, next) => {
  if (process.env.MONGODB_URI) {
    try {
      await connectDB()
    } catch (err) {
      console.error('DB connect middleware error:', err)
    }
  }
  next()
})

// Statically expose the resources folder
app.use('/resources', express.static(path.join(__dirname, 'data/resources')))

const limiter = rateLimit({ 
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
})
app.use('/api', limiter)

// Health Check
app.get('/health', (req, res) => res.status(200).json({ status: 'OK', uptime: process.uptime() }))
app.get('/api/health', (req, res) => res.status(200).json({ status: 'OK', uptime: process.uptime() }))

app.use('/api/auth',     authRoutes)
app.use('/api/profiles', profileRoutes)
app.use('/api/revision', revisionRoutes)
app.use('/api/ai',       aiRoutes)
app.use('/api/support',  supportRoutes)
app.use('/api/contests', contestRoutes)
app.use('/api/sheets',   sheetRoutes)
app.use('/api/resources', resourceRoutes)

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

export default app
