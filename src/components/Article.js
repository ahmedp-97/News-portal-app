import React from "react";

function Article({ data }) {
  return (
    <div className="newsArticle">
      <span className="news_source">{data.source.name}</span>
      <span className="news_author">{data.author}</span>
      <h1 className="news_title">{data.title}</h1>
      <p className="news_desc">{data.description}</p>
      <img width="450" height="345" src={data.urlToImage} />
      <span className="news_published">{data.publishedAt}</span>
      <p className="news_content">{data.content}</p>
    </div>
  );
}
export default Article;
