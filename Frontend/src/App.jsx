
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ListProduce from "./Pages/ListProduce";
import Dashboard from "./Pages/Dashboard"; 
import Marketplace from "./Pages/Marketplace";
import CropPrediction from "./Pages/CropPrediction"; 
import LearningHub from "./Pages/LearningHub"; 
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AuthProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/marketplace"
            element={
              <ProtectedRoute>
                <Marketplace />
              </ProtectedRoute>
            }
          />
          <Route
            path="/marketplace/list"
            element={
              <ProtectedRoute>
                <ListProduce />
              </ProtectedRoute>
            }
          />
          <Route
            path="/crop-prediction"
            element={
              <ProtectedRoute>
                <CropPrediction />
              </ProtectedRoute>
            }
          />
          <Route
            path="/learning-hub"
            element={
              <ProtectedRoute>
                <LearningHub />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;