import React, { Component } from 'react';
import FanUsers from './FanUsers';

class MovieItem extends Component {
  render() {
    const { fanUsersTheseMovie, movieDetails, users } = this.props;
    
    return (
      <li key={movieDetails.id}>
      	<h2>{movieDetails.name}</h2>
		<h3>Liked By:</h3>
		<FanUsers fanUsersTheseMovie={fanUsersTheseMovie} users={users} />
      </li>
      )
  }
}

export default MovieItem;