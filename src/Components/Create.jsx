import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      description.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1
    ) {
      alert("Each and every input must have at least 4 characters");
      return;
    }

    const product = {
      id: nanoid(),
      image,
      title,
      category,
      price,
      description,
    };

    setProducts((prevState) => [...prevState, product]);

    localStorage.setItem("products", JSON.stringify([...products, product]));

    toast.success("Product Added successfully");
    navigate("/");
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="text-3xl mb-5 w-1/2">Add New Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        placeholder="enter product description here.."
        rows="6"
        className="bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button className="px-5 py-2 border rounded border-blue-300 text-blue-400">
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
