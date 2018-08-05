import React, { Component } from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Announcements from '../components/Announcements';
import Hero from '../components/Hero';
import Post from '../components/Post';

class HomePage extends Component {
  get posts() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <section className="tc-posts-section">
        {posts.map((post, index) => (
          <Post key={index} {...post.node} isSummary />
        ))}
      </section>
    );
  }

  render() {
    return (
      <div>
        <Hero />
        <div className="tc-layout--home tc-container">
          {this.posts}
          <Announcements />
        </div>
      </div>
    );
  }
}

export default HomePage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 280)
          fields {
            slug
          }
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
