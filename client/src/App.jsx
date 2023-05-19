import "./App.css";
import Addmin from "./components/Addmin";
import Home from "./components/Home";
import Navbars from "./components/Navbars";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/Update";
import DemoUpdate from "./components/DemoUpdate";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-panel" element={<Addmin />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/update" element={<DemoUpdate />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
