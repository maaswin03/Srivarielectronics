import "./Products.css";
import { Data } from "./Data";
import { Image } from "./Image";

const Products = () => {
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
        <p style={{ marginBottom: "2%" }}>
          Reliable and efficient lighting & electrical solutions for every
          space.
        </p>
        <p id="hello12" style={{ marginBottom: "2%" }}>
          <a
            href="./brochure/srivarielectricals.pdf"
            download="Nimbus_lights.pdf"
          >
            Download brochure &gt;
          </a>
        </p>
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
              </div>
            </div>
          ))}
        </main>
        <div className="products1">
          <div className="products2">
            <h1>Learn More</h1>
            <p>
            Explore our top lighting & electrical solutions. Download our brochure for details.
            </p>
            <button className="services-button" onClick={handleDownload} >Download brochure</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
