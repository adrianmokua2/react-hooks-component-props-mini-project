import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  let name = blogData.name
  let image = blogData.image
  let about = blogData.about
  let posts = blogData.post
  

  return (
    <div className="App">
      <Header name={name} />
      <About about={about} image={image}/>
      <ArticleList posts={posts} />
      <Article></Article>
    </div>
  );
}

export default App;
