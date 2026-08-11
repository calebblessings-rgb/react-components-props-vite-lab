import React from "react";
import blogData from "../data/blog";

import Header from "./header";
import About from "./about";
import Articlelist from "./articlelist";
import BlogData from "./blog";

console.log(blogData);

function App() {
  return (
  <div>
    <Header />
    <About />
    <Articlelist />
  </div>
  );
}

export default App;
