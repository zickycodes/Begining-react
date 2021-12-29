// import React from "react";
import faker from "faker";

const CommonDetail = (p) => {
  return (
    <div className="ui container comment">
      <div className="comment">
        <a className="avatar" href="/">
          <img src={faker.image.image()} alt="avatar" />
        </a>
        <div className="content">
          <a className="author" href="/">
            {p.author}
          </a>
          <div className="metadata">
            <span className="date">{p.time}</span>
          </div>
          <div className="text">How artistic!</div>
        </div>
      </div>
    </div>
  );
};

export default CommonDetail;
