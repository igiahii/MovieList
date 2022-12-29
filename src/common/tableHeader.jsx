import React from "react";

//sortType from props {path : ...}
//columns
// onSort

function TableHeader({ sortType, onSort, columns }) {
  let sortHandler = (path) => {
    let sorttype = { ...sortType };
    if (sorttype.path === path) {
      sorttype.order = sorttype.order === "asc" ? "desc" : "asc";
    } else {
      sorttype.path = path;
      sorttype.order = "asc";
    }
    onSort(sorttype);
  };

  let iconHandler = (column) => {
    if (sortType.path !== column.path) return null;
    if (sortType.order === "asc")
      return <i className="ps-1 fa fa-sort-asc"></i>;
    return <i className="ps-1 fa fa-sort-desc"></i>;
  };
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            role="button"
            onClick={() => sortHandler(column.path)}
            scope="col"
          >
            {column.label}
            {iconHandler(column)}
            {/* {column.path !== sortType.path ? null : sortType.order === "asc" ? (
              <i className="ps-1 fa fa-sort-asc"></i>
            ) : (
              <i className="ps-1 fa fa-sort-desc"></i>
            )} */}
          
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
