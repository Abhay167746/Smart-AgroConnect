
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


