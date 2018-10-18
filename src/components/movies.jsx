import React, { Component } from 'react';
import { getMovie, getMovies, deleteMovie } from '../services/fakeMovieService';
import Moment from 'react-moment';

class Movies extends Component {
  state = {
    movie: {
      _id: '',
      title: '',
      genre: {
        _id: '',
        name: ''
      },
      numberInStock: 0,
      dailyRentalsRate: 0,
      publishDate: ''
    },
    movies: getMovies(),
    totalMovies: 0
  };

  formatTitle = title => {
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  formatDate = date => {
    return date.split('T')[0];
  };

  getMovie = () => {
    const _id = '5b21ca3eeb7f6fbccd471821';
    const movie = getMovie(_id);
    console.log(movie);
    this.setState({ movie: movie });
  };

  handleDelete = _id => {
    const movies = { ...this.state.movies };
    delete movies[_id];
    this.setState({ movies: movies });
    deleteMovie(_id);
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-flat btn-secondary" onClick={this.getMovie}>
          Get Movie
        </button>
        <h4>There are {this.state.totalMovies} movies in the database</h4>

        {/* table // title, genre, stock, rate, button(delete) */}
        <table className="table">
          <thead className="text-center">
            <tr>
              {Object.keys(this.state.movie).map(title => {
                return <th key={title}>{this.formatTitle(title)}</th>;
              })}
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr className="text-center" key={movie._id}>
                <td>{movie._id}</td>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Moment format="DD/MM/YYYY">{movie.publishDate}</Moment>
                </td>
                <td>
                  <button
                    onClick={this.handleDelete}
                    className="btn btn-danger btn-flat"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
