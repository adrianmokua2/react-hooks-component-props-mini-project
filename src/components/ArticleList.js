import React from 'react'

export default function ArticleList() {
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )

}
function ArticleList({ posts }) {
    return (
      <main>
        {posts.map((post, index) => (
          <Article key={index} title={post.title} content={post.content} />
        ))}
      </main>
    );
  }

