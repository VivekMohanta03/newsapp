import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-2" style={{ width: "24rem" }}>
          <span className="position-absolute top-0 translate-middle badge square-pill bg-danger" style={{left:"90%", zIndex: 1}}>
            {source}
          </span>
          <img src={imageUrl ? imageUrl : "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/breaking_latest_news_1200x675_1-sixteen_nine_569.jpg?VersionId=gJWbwWa5JU0jL7gbWRKQOul4jr47XN4c"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description ? description : title}</p>
            <p className="card-text"><small className="text-danger">By {author ? author : "unknown"} on {new Date(date).toLocaleTimeString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
