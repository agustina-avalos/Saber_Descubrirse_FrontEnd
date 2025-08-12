import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import ProfessionalPage from "./pages/ProfessionalPage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path="/professional" element={<ProfessionalPage/>} />
      <Route exact path="/contact" element={<ContactPage/>} />


    </Routes>
  );
}

export default App;