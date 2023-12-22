import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import LandingLayout from "./Layout/LandingLayout";
import Home from "./pages/Home";
import NotFound from "./utils/notFound";
import Scope1 from "./pages/Scope1";
import Scope2 from "./pages/Scope2";
import Scope3 from "./pages/Scope3";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/AuthProvider";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer />
        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingLayout />}>
            <Route index element={<Home />} />
            <Route path="/scope-1" element={<Scope1 />} />
            <Route path="/scope-2" element={<Scope2 />} />
            <Route path="/scope-3" element={<Scope3 />} />
            <Route path="/reports" element={<Reports />} />
          </Route>

          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Error */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
