import React from "react";
import TableBody from "../common/tableBody";
import Like from "./../common/like";
import TableHeader from "./../common/tableHeader";
function TableMovies(props) {
  const { filtermovies, removelist, onSort, sortType } = props;
  const columns = [
    { key: 0 },
    { key: 1, path: "title", label: "Title" },
    { key: 2, path: "genre.name", label: "Genre" },
    { key: 3, path: "numberInStock", label: "Stock" },
    { key: 4, path: "dailyRentalRate", label: "Rate" },
    { key: 5, content: (movie) => <Like isLiked={movie} /> },
    {
      key: 6,
      content: (movie) => (
        <button onClick={() => removelist(movie)} className="btn btn-danger">
          Delete
        </button>
      ),
    },
  ];
  return (
    <table className="table">
      <TableHeader columns={columns} sortType={sortType} onSort={onSort} />
      <TableBody filtermovies={filtermovies} columns={columns} />
      {/* <tbody>
        {filtermovies.map((movie) => (
          <tr key={movie._id}>
            <th scope="row">{filtermovies.indexOf(movie) + 1}</th>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like isLiked={movie} />
            </td>
            <td>
              <button
                onClick={() => removelist(movie)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody> */}
    </table>
  );
}

export default TableMovies;
