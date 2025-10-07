// 가격 포맷팅
export const formatPrice = (price) => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(price)
}

// 날짜 포맷팅
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('ko-KR')
}

// 이미지 URL (나중에 백엔드 연결 시)
export const getImageUrl = (imagePath) => {
  if (!imagePath) return '/placeholder.jpg'
  if (imagePath.startsWith('http')) return imagePath
  return `${import.meta.env.VITE_API_URL}/uploads/${imagePath}`
}