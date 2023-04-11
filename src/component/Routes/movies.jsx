import React, { Component } from "react";
import { getMovies } from "../../services/fakeMovieService";
import Pagination from "../pagination";
import Paginate from "../../common/paginate";
import ListGroup from "../../common/listGroup";
import { getGenres } from "../../services/fakeGenreService";
import TableMovies from "../tableMovies";
// import lodash
import _ from "lodash";
//import context
import LikeContext from "../../context/likecontext";
import SearchBar from "../searchBar";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedgenre: "",
    searchQuery: "",
    sorttype: { path: "title", order: "asc" },
  };

  componentDidMount() {
    let genres = [{ name: "All Genres" }, ...getGenres()];
    let movies = getMovies();
    movies.forEach((object) => (object.like = false));
    this.setState({ movies, genres });
  }

  getPageData = () => {
    const {
      movies,
      currentPage,
      pageSize,
      selectedgenre,
      searchQuery,
      sorttype,
    } = this.state;
    let filtered = movies;
    if (searchQuery)
      filtered = movies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedgenre && selectedgenre._id)
      filtered = movies.filter((m) => m.genre._id === selectedgenre._id);

    // let filtered =
    //   selectedgenre && selectedgenre._id
    //     ? movies.filter((m) => m.genre._id === selectedgenre._id)
    //     : movies;
    let sorted = _.orderBy(filtered, [sorttype.path], [sorttype.order]);
    let filtermovies = Paginate(sorted, currentPage, pageSize);
    return { totalcount: filtered.length, filtermovies };
  };

  render() {
    const { currentPage, pageSize, genres, selectedgenre, searchQuery } =
      this.state;

    const { totalcount, filtermovies } = this.getPageData();
    return (
      <LikeContext.Provider
        value={{
          onLike: this.onLikeHandler,
          statuslike: filtermovies,
        }}
      >
        <div className="row">
          <div className="col-2 m-3">
            <ListGroup
              genres={genres}
              filtergenre={this.filtergenre}
              selectedgenre={selectedgenre}
            ></ListGroup>
          </div>
          <div className="col container">
            <div className="show m-3">
              {`Showing ${totalcount} movies in the database  🍌`}
            </div>
            <div className="searchBar m-3" style={{ width: "20%" }}>
              <SearchBar value={searchQuery} onChange={this.handleSearch} />
            </div>
            <TableMovies
              filtermovies={filtermovies}
              removelist={this.removelist}
              onSort={this.onSort}
              sortType={this.state.sorttype}
            />
            <Pagination
              movies={totalcount}
              pageSize={pageSize}
              currentPage={currentPage}
              onChangePage={this.onChangePage}
              prevPage={this.prevPage}
              nextPage={this.nextPage}
            />
          </div>
        </div>
      </LikeContext.Provider>
    );
  }

  handleSearch = (query) => {
    console.log(query);
    this.setState({ searchQuery: query, selectedgenre: "", currentPage: 1 });
  };

  removelist = (movie) => {
    let itemlist = this.state.movies.filter((item) => item._id !== movie._id);
    return this.setState({ movies: itemlist });
  };
  onChangePage = (item) => {
    this.setState({ currentPage: item });
    // const { pageSize } = this.state;
    // let part1 = (item - 1) * pageSize;
    // let newarr = this.state.movies.slice(part1, item * pageSize);
    // return newarr
    // console.log(newarr);
    // this.setState(prevState => {
    //   return {
    //     ...prevState,
    //     filtermoviesvies : newarr
    //    };
    // });
  };
  prevPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };
  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  filtergenre = (genre) => {
    this.setState({ selectedgenre: genre, searchQuery: "", currentPage: 1 });
  };
  onLikeHandler = () => {
    console.log(this.state.movies.like);
  };
  onSort = (sorttype) => {
    this.setState({ sorttype });
  };
}

export default Movies;
