import React from 'react'

export default function Article({ title, date = "January 1, 1970", preview}) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  )
}
function ArticleList() {
    const articles = [
      {
        title: "Article 1",
        preview: "This is the preview of Article 1",
        date: "March 15, 2022",
      },
      {
        title: "Article 2",
        preview: "This is the preview of Article 2",
      },
    ];
  
    return (
      <main>
        {articles.map((article, index) => (
          <Article
            key={index}
            title={article.title}
            date={article.date}
            preview={article.preview}
          />
        ))}
      </main>
    );
  }