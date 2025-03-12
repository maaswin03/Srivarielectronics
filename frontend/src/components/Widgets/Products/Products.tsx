import "./Products.css";
import { Data } from "./Data";
import { Image } from "./Image";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const pdfUrl = "./brochure/srivarielectricals.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Nimbus_lights.pdf"; // File name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="products-section">
        <h1>Our Products</h1>
        <p>Reliable and efficient lighting & electrical solutions for every space.</p>
        <div className="Gallery-3">
          <button className="services-button" onClick={handleDownload}>
            Download brochure
          </button>
        </div>

        <main className="products-grid">
          {Data.map((item, index) => (
            <div key={index} className="product-card">
              <Image
                className="product-image"
                image={item.src}
                alt={item.name}
                objectCover="object-cover"
              />
              <div className="product-content">
                <h5>{item.title}</h5>
                <h6>{item.text}</h6>
                {index === Data.length - 1 && (
                  <button 
                    onClick={() => navigate("/Fans/Gallery")}
                  >
                    View More
                  </button>
                )}
              </div>
            </div>
          ))}
        </main>
      </section>
    </>
  );
};

export default Products;
