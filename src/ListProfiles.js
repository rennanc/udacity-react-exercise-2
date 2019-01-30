import React, { Component } from 'react';
import MovieItem from './MovieItem'


class ListProfiles extends Component {
  render() {
    var { users, movies, fanUsersByMovie } = this.props;
    
    return (
      <ul>
      {Object.keys(movies).map(id => (
          <MovieItem 
          	key={id}
            fanUsersTheseMovie={fanUsersByMovie[id]}
			movieDetails={movies[id]}
			users={users}
          />
         ))}
      </ul>
      )
  }
}

export default ListProfiles;