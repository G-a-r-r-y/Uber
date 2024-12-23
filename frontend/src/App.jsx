import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import CaptainLogin from "./pages/CaptainLogin";
import UserSignup from "./pages/UserSignup";
import CaptainSignup from "./pages/CaptionSignup";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/captain-login" element={<CaptainLogin />} />
            <Route path="/user-signup" element={<UserSignup />} />
            <Route path="/captain-signup" element={<CaptainSignup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
