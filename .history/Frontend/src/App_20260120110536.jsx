
// // import React from 'react';
// // import { Routes, Route } from 'react-router-dom';


// // import Header from './components/Shared/Header/Header';
// // import Footer from './components/Shared/Footer/Footer';
// // import Home from "./Pages/Home";
// // import Marketplace from "./Pages/Marketplace";
// // import LearningHub from "./Pages/LearningHub";
// // import CropPrediction from "./Pages/CropPrediction";
// // import ListProduce from "./Pages/ListProduce";
// // import Login from "./Pages/Login";
// // import SignUp from "./Pages/Signup"; 

// // function App() {
// //   return (
// //     <div className="App bg-light-bg">
// //       <Header />
// //       <main className="pt-20">
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/marketplace" element={<Marketplace />} />
// //           <Route path="/learning-hub" element={<LearningHub />} />
// //           <Route path="/crop-prediction" element={<CropPrediction />} />
// //           {/* <Route path="/list-produce" element={<ListProduce />} /> */}
// //           <Route path="/marketplace/list" element={<ListProduce />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/signup" element={<SignUp />} />
// //         </Routes>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import Header from "./components/Shared/Header/Header";
// import Footer from "./components/Shared/Footer/Footer";
// import Home from "./Pages/Home";
// import Marketplace from "./Pages/Marketplace";
// import LearningHub from "./Pages/LearningHub";
// import CropPrediction from "./Pages/CropPrediction";
// import ListProduce from "./Pages/ListProduce";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/Signup";
// import AuthPage from "./Pages/AuthPage"; // newly add
// import FarmerDashboard from "./Pages/FarmerDashboard";


// function App() {
//   return (
//     <div className="App bg-light-bg">
//       <Header />

//       <main className="pt-20">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/marketplace" element={<Marketplace />} />
//           <Route path="/learning-hub" element={<LearningHub />} />
//           <Route path="/crop-prediction" element={<CropPrediction />} />
//           <Route path="/marketplace/list" element={<ListProduce />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/auth" element={<AuthPage />} />
//           <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
//         </Routes>
//       </main>

//       <Footer />

//       {/* ToastContainer with high z-index so it shows above header */}
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//         toastStyle={{ zIndex: 99999 }}
//       />
//     </div>
//   );
// }

// export default App;


import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/layout/Footer";
import TopBar from "./components/layout/Topbar";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

// Pages
import { Outlet } from "react-router-dom";
import CropPrediction from "./pages/CropPrediction";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LearningHub from "./pages/LearningHub";
import ListProduce from "./pages/ListProduce";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import Signup from "./pages/Signup";
import IoTQualityDashboard from "./pages/IoTQualityDashboard";
import AboutUs from "./pages/AboutUs";
import Buy from "./pages/Buy";
import Cart from "./pages/Cart";
// Simple 404 Page
function NotFound() {
  return (
    <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
      404 - Page Not Found
    </h2>
  );
}

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-emerald-50">
      <TopBar />
      <main className="flex-1 pt-[64px] min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* All routes share AppLayout */}
          <Route element={<AppLayout />}>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/marketplace/list" element={<ListProduce />} />
              <Route path="/crop-prediction" element={<CropPrediction />} />
              <Route path="/learning-hub" element={<LearningHub />} />
              <Route path="/iot-quality" element={<IoTQualityDashboard />} />
              <Route path="/About" element={<AboutUs />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/cart" element={<Cart />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      </CartProvider>
    </AuthProvider>
  );
}
