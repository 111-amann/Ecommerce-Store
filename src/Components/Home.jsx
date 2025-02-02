import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
// import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = new URLSearchParams(search).get("category");

  const [filteredProducts, setFilteredProducts] = useState(null);

  // const getProductsCategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setFilteredProducts(data);
  //   } catch (err) {
  //     setFilteredProducts([]);
  //   }
  // };

  useEffect(() => {
    if (products && Array.isArray(products)) {
      if (!category || category === "undefined") {
        setFilteredProducts(products);
      } else {
        // getProductsCategory();
        setFilteredProducts(products.filter((p) => p.category === category));
      }
    }
  }, [category, products]);

  if (filteredProducts === null) {
    return <Loading />;
  }

  const productsToDisplay = Array.isArray(filteredProducts)
    ? filteredProducts
    : [];

  return (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap gap-4 overflow-x-hidden overflow-y-auto">
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product, index) => (
            <Link
              key={index}
              to={`/details/${product.id}`}
              className="card p-3 m-0 border shadow rounded w-[18.8%] h-[41%] flex flex-col justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              ></div>
              <h1>{product.title}</h1>
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
};

export default Home;
