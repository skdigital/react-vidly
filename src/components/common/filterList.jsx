import React, { Component } from 'react';

class FilterList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item active" style={{ cursor: 'pointer' }}>
            All Genres
          </li>
          <li className="list-group-item" style={{ cursor: 'pointer' }}>
            Action
          </li>
          <li className="list-group-item" style={{ cursor: 'pointer' }}>
            Comedy
          </li>
          <li className="list-group-item" style={{ cursor: 'pointer' }}>
            Thriller
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterList;
