// import axios from "../utils/axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

const Details = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null); // State to hold single product details
  const { id } = useParams();

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const productDeleteHandler = (id) => {
    const filteredProduct = products.filter((p) => p.id != id);
    setProducts(filteredProduct);
    localStorage.setItem("products", JSON.stringify(filteredProduct));
    navigate("/");
  };

  useEffect(() => {
    if (!product && Array.isArray(products) && products.length > 0) {
      const foundProduct = products.find((p) => String(p.id) === String(id));

      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [product, id, products]);

  return product ? (
    <div className="w-[70%] h-full flex justify-between items-center m-auto px-[5%] py-[10%]">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={`${product.image}`}
        alt={`${product.title}`}
      />
      <div className="content w-[57%]">
        <h1 className="text-4xl mb-1  font-semibold">{product.title}</h1>
        <h3 className="text-lg mb-4 tracking-tighter opacity-[60%]">
          {product.category}
        </h3>
        <h2 className="text-2xl mb-2">${product.price}</h2>
        <p className="tracking-tighter opacity-[95%] mb-8">
          {product.description}
        </p>
        <Link
          to={`/edit/:${id}`}
          className="px-5 py-2 border rounded border-blue-400 text-blue-500 mr-4"
        >
          edit
        </Link>
        <button
          onClick={() => productDeleteHandler(product.id)}
          className="px-5 py-2 border rounded border-red-400 text-red-500"
        >
          delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
