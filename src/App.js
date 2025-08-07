import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import ProfessionalPage from "./pages/ProfessionalPage";
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path="/professional" element={<ProfessionalPage/>} />
    </Routes>
  );
}

export default App;