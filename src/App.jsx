import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import LandingLayout from "./Layout/LandingLayout";
import Home from "./pages/Home";
import NotFound from "./utils/notFound";
import Scope1 from "./pages/Scope1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        {/* Landing */}
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<Home />} />
          <Route path="/scope-1" element={<Scope1 />} />
        </Route>

        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Error */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
