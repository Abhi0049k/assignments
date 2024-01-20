import './App.css'

function App() {
  return (
    <div className='mainContainer'>
      <div className='card'>
        <div className='bg-img'>
          <img src="https://media.licdn.com/dms/image/C5616AQG436ZLFyN0dA/profile-displaybackgroundimage-shrink_350_1400/0/1668498892243?e=1710979200&v=beta&t=TjJUHQCOaZfIN92OGKtb8U_AEoOLT5OVcUU-Wz2FTxE" alt="backgroundImage" />
        </div>
        <div className='header'>
          <img src="https://media.licdn.com/dms/image/D4D35AQHFnb86PTXAWQ/profile-framedphoto-shrink_400_400/0/1693173240335?e=1706338800&v=beta&t=jqdK3e7egDduk3PFzyGGrJRbHyZdVXwYiTCLDXrd6Z0" alt="ProfilePic" />
          <h3>Mangalam Kumar <span className='age'>20</span></h3>
          <p>Lucknow</p>
        </div>
        <div className='footer'>
          <div>
            <h2>80K</h2>
            <p>Followers</p>
          </div>
          <div>
            <h2>803k</h2>
            <p>Likes</p>
          </div>
          <div>
            <h2>1.4K</h2>
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
