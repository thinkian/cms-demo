import React, { Component } from 'react';

class SearchButton extends Component {
  constructor(props) {
    super(props);

    this.collapse = this.collapse.bind(this);
    this.expand = this.expand.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      expanded: false,
      value: '',
    };
  }

  componentDidUpdate() {
    if (this.input) {
      this.input.focus();
    }
  }

  handleChange(event) {
    const target = event.target;

    this.setState(() => ({
      value: target.value,
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  expand() {
    this.setState(() => ({
      expanded: true,
    }));
  }

  collapse() {
    const { value } = this.state;

    if (!value.trim()) {
      this.setState(() => ({
        expanded: false,
      }));
    }
  }

  render() {
    const { expanded, value } = this.state;
    const mainClass = 'tc-search';
    const expandedClass = expanded ? `${mainClass}--expanded` : '';

    return (
      <div className={`${mainClass} ${expandedClass}`}>
        <button
          className="tc-search-button"
          type="button"
          onClick={this.expand}
        >
          <i className="fas fa-search" />
          {expanded ? null : (
            <span className="tc-navigation-link-text">Search</span>
          )}
        </button>
        <form className="tc-search-form" onSubmit={this.handleSubmit}>
          <input
            className="tc-search-button-input"
            placeholder="Search"
            ref={node => (this.input = node)}
            onBlur={this.collapse}
            onChange={this.handleChange}
            value={value}
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SearchButton;
