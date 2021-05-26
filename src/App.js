
import {Suspense} from 'react'

import AppRouter from './components/AppRouter';
import public_routes from './routes/public-routes';

import './App.css';

function App() {
  return (
  // <div className="App">
  //   <header className="App-header">
  //   <img src={logo} className="App-logo" alt="logo" />
  //   <p>
  //     Edit <code>src/App.js</code> and save to reload.
  //   </p>
  //   <a
  //     className="App-link"
  //     href="https://reactjs.org"
  //     target="_blank"
  //     rel="noopener noreferrer"
  //   >
  //     Learn React
  //   </a>
  //   </header>
  // </div>
  <Suspense
    fallback={
    '<LoadingAnimation />'
    }
  >
    <AppRouter routes={public_routes} />
  
  </Suspense>
  // <AppRouter routes={public_routes} />
  );
}

export default App;
