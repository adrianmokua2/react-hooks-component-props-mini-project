import Article from "./Article";


export default function ArticleList({ posts }) {

    return (
      <main>
        {posts.map((post) => (
          <Article 
          key={post.id} 
          title={post.title} 
          date={post.date || "January 1,1979"}
          preview={post.preview} />
        ))}
      </main>
    );
  }

