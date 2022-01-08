import './App.css';
import { BrowserRouter as Router, Switch, Route }  from 'react-router-dom'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact={true} >
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
