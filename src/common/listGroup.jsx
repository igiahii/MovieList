import React from "react";
function ListGroup(props) {
  return (
    <React.Fragment>
      <ul className="list-group">
        {props.genres.map((genre) => (
          <li
            key={genre.name}
            role ="button"
            onClick={() => props.filtergenre(genre)}
            className={
              props.selectedgenre.name === genre.name
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default ListGroup;
