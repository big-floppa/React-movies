import React, { Component } from 'react';
import range from '../helpers/range';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.totalPages = this.props.totalPages;
    this.activePage = this.props.activePage;
    this.pageNeighbours = this.props.pageNeighbours;
  }

  getPages = (totalPages, activePage, pageNeighbours) => {
    const startPageNumber = Math.max(activePage - pageNeighbours, 1);
    const endPageNumber = Math.min(activePage + pageNeighbours, totalPages);
    return range(startPageNumber, endPageNumber);
  };

  handleClickToPrev = (activePage) => {
    if (activePage > 1) {
      this.props.setActivePage(activePage - 1);
    }
  };

  handleClickToNext = (activePage) => {
    if (activePage < this.totalPages) {
      this.props.setActivePage(activePage + 1);
    }
  };

  render() {
    const { totalPages, activePage, setActivePage } = this.props;
    const pageNeighbours = this.pageNeighbours;
    return (
      <ul className="pagination">
        <li className={activePage > 1 ? null : 'disabled'}>
          <a href="#!" onClick={() => this.handleClickToPrev(activePage)}>
            &laquo;
          </a>
        </li>
        {this.getPages(totalPages, activePage, pageNeighbours).map((page, idx) => (
          <li key={idx} className={activePage === page ? 'active blue' : 'waves-effect'}>
            <a href="#!" onClick={() => setActivePage(page)}>
              {page}
            </a>
          </li>
        ))}
        <li className={activePage < totalPages ? null : 'disabled'}>
          <a href="#!" onClick={() => this.handleClickToNext(activePage)}>
            &raquo;
          </a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
