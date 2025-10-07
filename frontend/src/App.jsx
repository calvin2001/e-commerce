import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Search, Heart, ShoppingCart } from "lucide-react";
import Products from "./pages/Products";

// Pages (아직 없지만 미리 import 준비)
// import Home from './pages/Home'
// import Products from './pages/Products'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* 임시 네비게이션 */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <h1 className="text-2xl font-bold text-primary-600">
                  ShopZone
                </h1>
                <div className="hidden md:flex items-center gap-6">
                  <a
                    href="/"
                    className="text-gray-700 hover:text-primary-600 font-medium"
                  >
                    홈
                  </a>
                  <a
                    href="/products"
                    className="text-gray-700 hover:text-primary-600 font-medium"
                  >
                    여성
                  </a>
                  <a
                    href="/products"
                    className="text-gray-700 hover:text-primary-600 font-medium"
                  >
                    남성
                  </a>
                  <a
                    href="/products"
                    className="text-gray-700 hover:text-primary-600 font-medium"
                  >
                    신상품
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-gray-700 hover:text-primary-600">
                  <Search className="w-5 h-5" />
                </button>
                <button className="text-gray-700 hover:text-primary-600">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="text-gray-700 hover:text-primary-600 relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 font-medium">
                  로그인
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* 메인 컨텐츠 */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to ShopZone! 🛒
                  </h2>
                  <p className="text-gray-600">
                    최고의 쇼핑 경험을 제공합니다
                  </p>
                  <a
                    href="/products"
                    className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 font-semibold"
                  >
                    쇼핑 시작하기
                  </a>
                </div>
              }
            />
            {/* 나중에 추가할 라우트들 */}
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>

        {/* Toast 알림 */}
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
