import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, url, author, date, source } = this.props;
    return (
      <div>
        {/* ff99b46517834d58bab9cdf4ec7cd643 */}
        <div className="card" style={{ width: "18rem" }}>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small class="text-body-secondary">
                Last updated by {author} at {date}
              </small>
            </p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
