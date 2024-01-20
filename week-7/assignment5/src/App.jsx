import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [user, setUser] = useState({});

  useEffect(()=>{
    axios.get(`https://api.github.com/users/Abhi0049k`)
    .then((res)=> res.data)
    .then((res)=>{
      let user = {
        username: res.login,
        avatar_url: res.avatar_url,
        followers: res.followers,
        following: res.following,
        github_url: res.html_url,
        name: res.name
      }
      setUser(user);
    })
    .catch((err)=> console.log(err))
  },[])

  return (
    <div className='mainContainer'>
      <div className='card'>
        <div className='bg-img'>
          <img src="https://media.licdn.com/dms/image/C5616AQG436ZLFyN0dA/profile-displaybackgroundimage-shrink_350_1400/0/1668498892243?e=1710979200&v=beta&t=TjJUHQCOaZfIN92OGKtb8U_AEoOLT5OVcUU-Wz2FTxE" alt="backgroundImage" />
        </div>
        <div className='header'>
          <img src={user.avatar_url} alt="ProfilePic" />
          <h3>{user.name}</h3>
          <a href={user.github_url}>{user.username}</a>
        </div>
        <div className='footer'>
          <div>
            <h2>{user.followers}</h2>
            <p>Followers</p>
          </div>
          <div>
            <h2>{user.following}</h2>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
