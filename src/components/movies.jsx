import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Moment from 'react-moment';
import Like from './common/like';
import Pagination from './common/pagination';
import FilterList from './common/filterList';

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4
  };

  formatTitle = title => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    console.log(index);
    movies[index] = { ...movies[index] };
    console.log(movies[index]);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = () => {
    console.log('PageChange Clicked');
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <h4>There are no movies in the database</h4>;

    return (
      <React.Fragment>
        <h4>Showing {count} movies in the database</h4>

        <div className="row mt-3">
          <div className="col-sm-3">
            <FilterList />
          </div>
          <div className="col-sm-8">
            <table className="table">
              <thead className="text-center">
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Number in Stock</th>
                  <th>Daily Rental rate</th>
                  <th>Publish Date</th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map(movie => (
                  <tr className="text-center" key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Moment format="DD/MM/YYYY">{movie.publishDate}</Moment>
                    </td>
                    <td>
                      <Like
                        movie
                        liked={movie.liked}
                        onClick={() => this.handleLike(movie)}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-flat"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <Pagination
                itemsCount={count}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
