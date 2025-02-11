import "./Products.css";
import { Data } from "./Data";
import { Image } from "./Image";

const Products = () => {
  return (
    <section className="products-section">
      <h1>Our Products</h1>
      <p>Reliable and efficient lighting & electrical solutions for every space.</p>
      <p id="hello12" style={{marginBottom:"2%"}}>
        <a href="./brochure/srivarielectricals.pdf" download="Nimbus_lights.pdf">
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
              <h5>
                {item.title}
              </h5>
              <h6>
                {item.text}
              </h6>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Products;
