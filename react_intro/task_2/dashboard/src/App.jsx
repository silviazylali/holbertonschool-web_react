import './App.css'
import holbertonLogo from './assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from './utils.js';
import Notifications from './Notifications.jsx';

function App() {
  return (
    <>
      <div>
        <Notifications />
      </div>
      <div className="App-header">
        <img src={holbertonLogo} alt='holberton logo' />
        <h1 style={{ color: '#e1003C' }} >School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">email</label>
        <input type="email" id="email"></input>

        <label htmlFor="password">password</label>
        <input type="password" id="password"></input>

        <button type="submit">OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getCurrentYear()} - {getFooterCopy()}</p>
      </div>
    </>
  )
}
export default App;