import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Post from '../components/Post';

class BlogPostTemplate extends Component {
  get navLinks() {
    const { previous, next } = this.props.pathContext;

    return (
      <ul className="tc-post-navigation-links">
        {previous && (
          <li>
            <Link
              className="tc-post-navigation-link"
              to={previous.fields.slug}
              rel="prev"
            >
              ← {previous.frontmatter.title}
            </Link>
          </li>
        )}

        {next && (
          <li>
            <Link
              className="tc-post-navigation-link"
              to={next.fields.slug}
              rel="next"
            >
              {next.frontmatter.title} →
            </Link>
          </li>
        )}
      </ul>
    );
  }
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');

    return (
      <div className="tc-layout--post">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <div className="tc-container">
          <Post {...post} />
          {this.navLinks}
        </div>
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        author
        tags
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
