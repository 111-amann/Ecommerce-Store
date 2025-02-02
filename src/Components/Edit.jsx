import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const sanitizedId = id.replace(/^:/, "");

  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    const productToEdit = products.find((p) => p.id === sanitizedId);

    if (productToEdit) {
      setProduct(productToEdit);
    }
  }, [sanitizedId, products]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const updateProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.description.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1
    ) {
      alert("Each and every input must have at least 4 characters");
      return;
    }

    const pi = products.findIndex((p) => p.id === sanitizedId);

    if (pi >= 0) {
      const updatedProducts = [...products];
      updatedProducts[pi] = { ...updatedProducts[pi], ...product };

      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));

      navigate("/");
    }
  };

  return (
    <form
      onSubmit={updateProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="text-3xl mb-5 w-1/2">Edit Product</h1>
      <input
        type="url"
        placeholder="Image URL"
        className="bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="image"
        onChange={changeHandler}
        value={product.image}
      />
      <input
        type="text"
        placeholder="Title"
        className="bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="title"
        onChange={changeHandler}
        value={product.title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="category"
          onChange={changeHandler}
          value={product.category}
        />
        <input
          type="number"
          placeholder="Price"
          className="bg-zinc-100 rounded p-3 w-[48%] mb-3"
          name="price"
          onChange={changeHandler}
          value={product.price}
        />
      </div>
      <textarea
        placeholder="Enter product description here..."
        rows="6"
        className="bg-zinc-100 rounded p-3 w-1/2 mb-3"
        name="description"
        onChange={changeHandler}
        value={product.description}
      ></textarea>
      <div className="w-1/2">
        <button className="px-5 py-2 border rounded border-blue-300 text-blue-400">
          Edit Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
