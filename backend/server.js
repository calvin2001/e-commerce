import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// 환경변수 로드
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// 미들웨어
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// 테스트 라우트
app.get('/', (req, res) => {
  res.json({ message: 'ShopZone API is running! 🚀' })
})

app.get('/api/test', (req, res) => {
  res.json({ 
    success: true,
    message: 'Backend is working!',
    timestamp: new Date()
  })
})

// 404 핸들러
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

// 에러 핸들러
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  })
})

// 서버 시작
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`🌍 http://localhost:${PORT}`)
})