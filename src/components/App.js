import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  let name = "Overreacted"
  const posts = [
    { title: "Article 1", content: "Content of Article 1" },
    { title: "Article 2", content: "Content of Article 2" },
    { title: "Article 3", content: "Content of Article 3" },
  ];

  return (
    <div className="App">
      <Header> <h1>name={name} </h1></Header>
      <About></About>
      <ArticleList posts={posts} />
      <Article></Article>
    </div>
  );
}

export default App;
