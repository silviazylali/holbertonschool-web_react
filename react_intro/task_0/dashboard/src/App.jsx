import './App.css'
import holbertonLogo from './assets/holberton-logo.jpg'
function App() {
  return (
    <>
      <div className="App-header">
        <img src={holbertonLogo} alt='holberton logo' />
        <h1 style={{ color: '#E1003C' }} >School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright the current year e.g: 2025 - holberton School</p>
      </div>
    </>
  )
}
export default App
