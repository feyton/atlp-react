import React, { useState } from "react";

function Category(categories) {
  const [cats, setstate] = useState([
    {
      name: "Software",
      count: 30,
    },
    {
      name: "Tech",
      count: 20,
    },
    {
      name: "Tutorial",
      count: 2,
    },
  ]);
  return (
    <div class="categories">
      <h1 class="center">Categories</h1>
      {cats.map((cat) => (
        <div class="category color-gradient" key={cat.name}>
          <span>{cat.name}</span>
          <span>(30)</span>
        </div>
      ))}
    </div>
  );
}

export default Category;
