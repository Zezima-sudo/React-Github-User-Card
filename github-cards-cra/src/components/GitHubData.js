import React from 'react';

import axios from 'axios'


class GitHubData extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: [],
      followers: []
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/zezima-sudo')
      .then(res => {
        const users = res.data

        this.setState({ 
          userData: users,
          
        })
        console.log(users)

      })
      axios.get('https://api.github.com/users/zezima-sudo/followers')
      .then(res => {
        const followers = res.data.repos_url

        this.setState({
          followers: followers
        })
      })


  }


  render() {
    return (
     
        <div className="App">
      <h1>{this.state.userData.login}</h1>
      <img
      src={this.state.userData.avatar_url}
       />
       <h2>Followers: {this.state.followers}</h2>
      </div>
          
          ) 
    
    
    
  }
}

export default GitHubData;
