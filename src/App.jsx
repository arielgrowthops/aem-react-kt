import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slide1 from "./pages/slide1";
import Slide2 from "./pages/slide2";
import Slide3 from "./pages/slide3";
import Slide4 from "./pages/slide4";
import Slide5 from "./pages/slide5";
import Slide6 from "./pages/slide6";
import Exercise from "./pages/exercise";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Slide1 />} />
        <Route path="slide1" element={<Slide1 />} />
        <Route path="slide2" element={<Slide2 />} />
        <Route path="slide3" element={<Slide3 />} />
        <Route path="slide4" element={<Slide4 />} />
        <Route path="slide5" element={<Slide5 />} />
        <Route path="slide6" element={<Slide6 />} />
        <Route path="exercise" element={<Exercise />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
