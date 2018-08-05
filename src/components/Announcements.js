import React, { Component } from 'react';

import DATA from '../data/events.json';

class Announcements extends Component {
  renderEvent(event, index) {
    const locations = event.location.split(',');

    return (
      <li key={index}>
        <h4 className="tc-event-title">{event.title}</h4>
        <time className="tc-event-date">
          {event.date}, {event.time}
        </time>
        {locations.map((location, index) => (
          <span key={index} className="tc-event-location">
            {location}
          </span>
        ))}
      </li>
    );
  }

  render() {
    const events = DATA.events;

    return (
      <aside className="tc-announcements">
        <h3 className="tc-announcements-title">Upcoming events</h3>
        <ul className="tc-event-list">{events.map(this.renderEvent)}</ul>
      </aside>
    );
  }
}

export default Announcements;
