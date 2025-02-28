import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import GalleryView from "./Pages/Gallery/GalleryView";
import FansGalleryView from "./Pages/FansGallery/GalleryView";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<GalleryView />} />
          <Route path="/Fans/Gallery" element={<FansGalleryView/>} />
        </Routes>
      </Router>
    </>
  );
}
