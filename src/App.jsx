import React from "react";
import Home from "./Components/Home";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

const App = () => {
  const { search, pathname } = useLocation();

  return (
    <div className="h-screen w-screen flex">
      {(pathname !== "/" || search.length > 0) && (
        <Link to="/" className="text-blue-300 absolute left-[17%] top-[4%]">
          Home
        </Link>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
