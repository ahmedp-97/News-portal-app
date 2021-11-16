import React from "react";


function NewsArticle({ data }) {
  
  return (
    <div className="news">
      <img width="450" height="305" src={data.urlToImage} />
      <h1 className="news_title">{data.title}</h1>
      <p className="news_desc">{data.description}</p>
      <span>
        Read more {" "}
        <a href={data.url}>
          <b>{data.title}</b>
      </a>
      </span>
      <button onClick = {() => {
      }} > Read more</button>
    </div>
  );
}

export default NewsArticle;
