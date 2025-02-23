import "./Gallery.css";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();
  const data = [
    {
      imageLink: "/images/gallery1.jpeg?w=600&format=webp",
    },
    {
      imageLink: "/images/gallery2.jpeg?w=600&format=webp",
    },
    {
      imageLink: "/images/gallery3.jpeg?w=600&format=webp",
    },
    {
      imageLink: "/images/gallery4.jpeg?w=600&format=webp",
    },
    {
      imageLink: "/images/gallery5.jpeg?w=600&format=webp",
    },
    {
      imageLink: "/images/gallery6.jpeg?w=600&format=webp",
    },
  ];

  return (
    <div className="Gallery-1">
      <div className="Gallery-2">
        <h1>Gallery</h1>
        <p>Some of our recent works showcasing reliability and efficiency.</p>
        <div className="Gallery-3">
          <button
            className="services-button"
            onClick={() => navigate("/Gallery")}
          >
            Read More
          </button>
        </div>
      </div>
      <div className="Gallery-container">
        <div className="Gallery-grid">
          {data.map(({ imageLink }, index) => (
            <div key={index} className="Gallery-item">
              <img
                className="Gallery-image"
                src={imageLink}
                alt="Gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
