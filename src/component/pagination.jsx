import React from "react";
import _ from "lodash";
function Pagination(props) {
  let pages = Math.ceil(props.movies / props.pageSize);
  let pagarray = _.range(1, pages + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            role="button"
            className={
              props.currentPage === 1 ? "user-select-none page-link disabled" : "page-link"
            }
            onClick={props.prevPage}
          >
            Prev
          </a>
        </li>
        {pagarray.map((item) => (
          <li
            key={item}
            className={
              props.currentPage === item ? "page-item active " : "page-item"
            }
          >
            <a
              role="button"
              onClick={() => props.onChangeHandler(item)}
              className="page-link pe-auto"
            >
              {item}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            role="button"
            className={
              props.currentPage === pages ? "user-select-none page-link disabled" : "page-link"
            }
            onClick={props.nextPage}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
