import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let { title, description, imageurl, newsurl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={!imageurl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfselqA-GATSz223uUbeVoRM1gsO8O9PuKjo8p9Em&s" : imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }}>
                {source}
                <span className="visually-hidden">unread messages</span>
              </span></h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()} ago</small></p>
              <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
