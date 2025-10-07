import { Heart, ShoppingCart, Star } from 'lucide-react'
import { formatPrice } from '../../utils/helpers'

export default function ProductCard({ product }) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  )

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* 배지들 */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {product.isNew && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            BEST
          </span>
        )}
        {discountPercent > 0 && (
          <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercent}%
          </span>
        )}
      </div>

      {/* 찜하기 버튼 */}
      <button className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50">
        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
      </button>

      {/* 이미지 */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* 호버 시 빠른 장바구니 */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-white text-gray-900 py-2 rounded-lg font-medium hover:bg-gray-100 flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            장바구니 담기
          </button>
        </div>
      </div>

      {/* 내용 */}
      <div className="p-4">
        {/* 브랜드 & 카테고리 */}
        <div className="flex items-center justify-between mb-1">
          <p className="text-xs font-medium text-gray-900">{product.brand}</p>
          <p className="text-xs text-gray-500">{product.gender}</p>
        </div>

        {/* 상품명 */}
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* 평점 */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-gray-700">
            {product.rating}
          </span>
          <span className="text-sm text-gray-500">
            ({product.reviews})
          </span>
        </div>

        {/* 색상 옵션 미리보기 */}
        <div className="flex gap-1 mb-3">
          {product.colors.slice(0, 4).map((color, idx) => (
            <div
              key={idx}
              className="w-5 h-5 rounded-full border border-gray-300"
              style={{ 
                backgroundColor: color === '화이트' ? '#FFFFFF' : 
                                color === '블랙' ? '#000000' :
                                color === '그레이' ? '#9CA3AF' :
                                color === '네이비' ? '#1E3A8A' :
                                color === '베이지' ? '#D4B896' :
                                color === '브라운' ? '#92400E' :
                                color === '핑크' ? '#EC4899' : '#E5E7EB'
              }}
              title={color}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-gray-500">+{product.colors.length - 4}</span>
          )}
        </div>

        {/* 가격 */}
        <div className="flex items-center gap-2">
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </div>
  )
}