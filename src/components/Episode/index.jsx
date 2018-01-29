import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';
import slugify from 'slugify';
import './style.scss';

class Episode extends React.Component {
  render() {
    const { guid, title, description, published, link } = this.props.data.node;
    const slug = slugify(this.props.data.node.title, {lower: true});

    return (
      <div className="post">
        <div className="post__meta">
          <time className="post__meta-time" dateTime={moment(published).format('MMMM D, YYYY')}>
            {moment(published).format('DD/MM/YYYY')}
          </time>
          <span className="post__meta-divider" />
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>{title}</Link>
        </h2>
        <p className="post__description">{description}</p>
        <Link className="post__readmore" to={slug}>Read</Link>
      </div>
    );
  }
}

export default Episode;
