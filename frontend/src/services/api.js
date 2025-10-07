import axios from 'axios'

// API Base URL
const API_URL = import.meta.env.VITE_API_URL

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 요청 인터셉터 (토큰 자동 추가 - 나중에)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터 (에러 핸들링)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 401 에러 시 로그인 페이지로 (나중에)
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      // window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
