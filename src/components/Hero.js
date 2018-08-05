import React, { Component } from 'react';
import throttle from 'lodash/throttle';

class Hero extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = throttle(this.handleScroll.bind(this), 50);
  }

  componentDidMount() {
    this.header = document.querySelector('.tc-header');

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.header = null;

    window.removeEventListener('scroll', this.handleScroll);
  }

  handleClick() {
    const link = document.querySelector('.tc-post-link');

    window.scrollTo({
      top: link.offsetTop - 100,
      behavior: 'smooth'
    });
  }

  handleScroll(event) {
    const fixedClass = 'tc-header--fixed';

    if (this.header && window.scrollY > this.header.offsetHeight) {
      this.header.classList.add(fixedClass);
    } else {
      this.header.classList.remove(fixedClass);
    }
  }

  render() {
    return (
      <div className="tc-hero">
        <h1 className="tc-hero-title">Think Blog</h1>
        <p className="tc-hero-subtitle">This demo was built with [CMS]</p>
        <button
          className="tc-scroll-button"
          type="button"
          onClick={this.handleClick}
        >
          <svg
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            height="1em"
            width="1em"
            viewBox="0 0 40 40"
          >
            <g>
              <path d="m37.5 18.6q0 1.2-0.9 2l-14.5 14.5q-0.9 0.9-2 0.9-1.2 0-2-0.9l-14.6-14.5q-0.8-0.8-0.8-2 0-1.2 0.8-2.1l1.7-1.6q0.9-0.9 2-0.9 1.2 0 2 0.9l6.6 6.5v-15.7q0-1.1 0.8-2t2-0.8h2.9q1.2 0 2 0.8t0.9 2v15.7l6.5-6.5q0.8-0.9 2-0.9 1.2 0 2.1 0.9l1.6 1.6q0.9 0.9 0.9 2.1z" />
            </g>
          </svg>
        </button>
      </div>
    );
  }
}

export default Hero;
