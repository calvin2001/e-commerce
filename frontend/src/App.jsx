import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import api from "./services/api";

// Pages (아직 없지만 미리 import 준비)
// import Home from './pages/Home'
// import Products from './pages/Products'

function App() {
  const [testResult, setTestResult] = useState(null);

  const testBackend = async () => {
    try {
      const response = await api.get("/test");
      setTestResult(response.data);
    } catch (error) {
      console.error("Error:", error);
      setTestResult({ error: "Backend not connected!" });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* 임시 네비게이션 */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-primary-600">ShopZone</h1>
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
                    Phase 1 완료! 프로젝트 세팅 성공!
                  </p>
                </div>
              }
            />
            {/* 나중에 추가할 라우트들 */}
          </Routes>
        </main>

        <button
          onClick={testBackend}
          className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
        >
          Test Backend Connection
        </button>

        {testResult && (
          <pre className="mt-4 p-4 bg-gray-100 rounded">
            {JSON.stringify(testResult, null, 3)}
          </pre>
        )}

        {/* Toast 알림 */}
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
