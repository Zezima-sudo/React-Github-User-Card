import React from 'react';

import axios from 'axios'


class GitHubData extends React.Component {
  constructor() {
    super()
    this.state = {
      userData: [],
      userFollowers: []
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
    const followers = res.data

    this.setState({
      userFollowers: followers
    })
    console.log(followers)
    
  })
    
  }
  handleSubmit = (e) => {
    e.preventDefault()
    alert(this.state.userFollowers)
  

}
  render() {
    return (

      <div className="App">
        <h1>{this.state.userData.login}</h1>
        <img
          src={this.state.userData.avatar_url}
        />


      <div className="followers">
        <h2>Followers</h2> 
       
       {this.state.userFollowers.map(item => (
         <img src={item.avatar_url} />
       ))}
       
        
       </div>
  
        

      </div>

    )



  }
}

export default GitHubData;
