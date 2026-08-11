import React from "react";
import blogData from "../data/blog";

import Header from "./header";
import About from "./about";
import Articlelist from "./articlelist";

console.log(blogData);

function App() {
  return (
  <div>
    <Header name={blogData.name} />
    <About 
    image={blogData.image}
    about={blogData.about}
    />
    <Articlelist posts={blogData.posts} />
  </div>
  );
}

export default App;
