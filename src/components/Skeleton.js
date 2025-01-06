import React, { Component } from "react";

export class Skeleton extends Component {
  render() {
    return (
      <div className="news-card">
        <div className="news-image">
          <img src="https://via.placeholder.com/300x200" alt="News Thumbnail" />
        </div>
        <div className="news-content">
          <h3 className="news-title">News Article Title</h3>
          <p className="news-description">
            A brief description of the news article goes here. This gives the
            reader a quick overview.
          </p>
          <div className="news-footer">
            <span className="news-author">By Author Name</span>
            <span className="news-date">Jan 5, 2025</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Skeleton;
