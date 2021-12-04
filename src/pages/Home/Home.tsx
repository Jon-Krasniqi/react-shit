import { Heading } from "../../components/Heading/Heading";
import { Product } from "../../components/Product/Product";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <section className="products-section">
        <Heading title="Explore our Products" />
        <ul className="products-list">
          <Product title="Night Eye Cream" regularPrice={100} salePrice={50} />
          <Product
            title="Night Eye Cream 2"
            regularPrice={100}
            // salePrice={50}
          />
        </ul>
      </section>
    </>
  );
};
