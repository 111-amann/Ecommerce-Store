import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${
      (Math.random() * 255).toFixed()
    },${(Math.random() * 255).toFixed()},0.4)`;
  };
  
  return (
    <nav className="bg-zinc-50 w-[15%] h-full flex flex-col items-center pt-5">
      <a
        className="px-5 py-2 border rounded border-blue-200 text-blue-300"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-xl mb-3 w-[80%]">Category Filter</h1>
      <div className="w-[80%]">
        {distinct_category.map((category, index) => (
          <Link
            key={index}
            to={`?category=${category}`}
            className="flex items-center mb-3"
          >
            <span style={{backgroundColor:color()}} className="w-[15px] h-[15px] rounded-full mr-2"></span>
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
