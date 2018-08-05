import React, { Component } from 'react';
import Link from 'gatsby-link';

class Post extends Component {
  get body() {
    const { excerpt, fields, html, isSummary } = this.props;

    if (isSummary) {
      return (
        <p className="tc-post-body">
          {excerpt}{' '}
          <Link to={fields.slug} className="tc-post-link--more">
            Read more
          </Link>
        </p>
      );
    }

    return (
      <div
        className="tc-post-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  get tags() {
    const {
      frontmatter: { tags }
    } = this.props;

    if (!tags) {
      return null;
    }

    return (
      <ul className="tc-post-tags">
        {tags.map(tag => (
          <li key={tag}>
            <i className="fas fa-tag" />
            {tag}
          </li>
        ))}
      </ul>
    );
  }

  get title() {
    const { isSummary, fields, frontmatter } = this.props;

    if (isSummary) {
      return (
        <Link to={fields.slug} className="tc-post-link">
          {frontmatter.title}
        </Link>
      );
    }

    return <h1 className="tc-post-title">{frontmatter.title}</h1>;
  }

  render() {
    const { frontmatter } = this.props;

    return (
      <article className="tc-post">
        {this.title}
        <cite className="tc-post-author">
          by {frontmatter.author} on {frontmatter.date}
        </cite>
        {this.body}
        {this.tags}
      </article>
    );
  }
}

export default Post;
