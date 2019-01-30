import React, { Component } from 'react';

class FanUsers extends Component {
  render() {
    
    const { fanUsersTheseMovie, users} = this.props;
    
    if (!fanUsersTheseMovie || fanUsersTheseMovie.length === 0) {
      return <p>None of the current users liked this movie.</p>;
    }
    
    return (
      <ol>
      	{fanUsersTheseMovie.map(id => (
         	<li key={id}>
         		<p>{users[id].name}</p>
         	</li>
         ))}
      </ol>
      )
  }
}

export default FanUsers;