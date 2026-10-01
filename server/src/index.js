import app from './app.js'
import { connectDB } from './config/db.js'

async function startServer() {
  try {
    await connectDB()
    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (err) {
    console.error('Failed to start server:', err)
  }
}

if (!process.env.VERCEL) {
  startServer()
}

export default app
