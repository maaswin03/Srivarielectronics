import "./Gallery.css";

export default function Gallery() {
  const data = [
    {
      imageLink: "/images/gallery1.jpeg",
    },
    {
      imageLink: "/images/gallery2.jpeg",
    },
    {
      imageLink: "/images/gallery3.jpeg",
    },
    {
      imageLink: "/images/gallery4.jpeg",
    },
    {
      imageLink: "/images/gallery5.jpeg",
    },
    {
      imageLink: "/images/gallery6.jpeg",
    },
  ];

  return (
    <div className="Gallery-1">
      <h1>Gallery</h1>
      <p>Some of our recent works showcasing reliability and efficiency.</p>
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
