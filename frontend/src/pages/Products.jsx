import { useState } from 'react'
import { dummyProducts, categories, genders } from '../data/dummyProducts'
import ProductCard from '../components/product/ProductCard'
import { Search, SlidersHorizontal } from 'lucide-react'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedGender, setSelectedGender] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  // 필터링된 상품
  const filteredProducts = dummyProducts.filter(product => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchGender = selectedGender === 'all' || product.gender === selectedGender
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchGender && matchSearch
  })

  // 정렬
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      case 'reviews':
        return b.reviews - a.reviews
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            전체 상품
          </h1>
          <p className="text-gray-600">
            {sortedProducts.length}개의 상품
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 사이드바 - 필터 */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4 space-y-6">
              
              {/* 성별 필터 */}
              <div>
                <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  성별
                </h2>
                <div className="space-y-2">
                  {genders.map(gender => (
                    <button
                      key={gender.id}
                      onClick={() => setSelectedGender(gender.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedGender === gender.id
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {gender.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 카테고리 필터 */}
              <div>
                <h2 className="font-semibold text-gray-900 mb-4">
                  카테고리
                </h2>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="float-right text-sm text-gray-500">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* 메인 컨텐츠 */}
          <main className="flex-1">
            
            {/* 검색 & 정렬 */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              {/* 검색바 */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="상품명, 브랜드 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* 정렬 */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
              >
                <option value="default">추천순</option>
                <option value="reviews">리뷰 많은순</option>
                <option value="price-low">낮은 가격순</option>
                <option value="price-high">높은 가격순</option>
                <option value="rating">평점 높은순</option>
                <option value="name">이름순</option>
              </select>
            </div>

            {/* 상품 그리드 */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {sortedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  검색 결과가 없습니다.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}