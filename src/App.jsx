import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryProvider } from "./contexts/QueryContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import ScrollToTop from "./components/common/ScrollTop"; 
import RarevocHome from "./pages/Rarevoc";
import { motion } from "framer-motion";

function App() {
  return (
    <QueryProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop /> 
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Routes>
                  <Route path="/" element={<RarevocHome />} />
                </Routes>
              </motion.div>
            </main>
          </div>
        </Router>
      </ErrorBoundary>
    </QueryProvider>
  );
}

export default App;
