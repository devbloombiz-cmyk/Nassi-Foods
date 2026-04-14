import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ScrollToTop from "./components/common/ScrollTop"; 
import NazzifoodsHome from "./pages/Nazzifoods";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop /> 
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<NazzifoodsHome />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
