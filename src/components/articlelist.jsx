import Article from "./article";

function ArticleList(props) {
  return (
    <main>
      {props.posts.map(post => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;