import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import GalleryView from "./Pages/Gallery/GalleryView";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<GalleryView />} />
        </Routes>
      </Router>
    </>
  );
}
