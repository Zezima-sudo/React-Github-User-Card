import React from 'react';

import axios from 'axios'


class GitHubData extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: []
    }
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/zezima-sudo')
      .then(res => {
        const users = res.data
        this.setState({ userData: users })
        console.log(users)

      })
  }


  render() {
    return (
     
        <div className="App">
      <h1>{this.state.userData.login}</h1>
      <img
      src={this.state.userData.avatar_url}
       />
      </div>
          
          ) 
    
    
    
  }
}

export default GitHubData;
