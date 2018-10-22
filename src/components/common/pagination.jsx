import React from 'react';
import _ from 'lodash';

// Input: Rerender page function
// Output: Page selected

const Pagination = props => {
  const { itemsCount, pageSize } = props;

  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map(page => (
            <li key={page} className="page-item">
              <a onClick={() => props.onPageChange()} className="page-link">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
