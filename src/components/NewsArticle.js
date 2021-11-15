import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <img width="450" height="345" src={data.urlToImage} />
      <h1 className="news_title">{data.title}</h1>
      <p className="news_desc">{data.description}</p>
      <button>Read more</button>
    </div>
  );
}

export default NewsArticle;
