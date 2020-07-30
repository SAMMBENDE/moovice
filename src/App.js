import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Discover from './components/Discover';
import Popular from './components/Popular';
import DiscoverBattle from './components/DiscoverBattle';
import MyList from './components/MyList';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/battle/">Battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular-battle</Link></li>
              <li><Link to="/my-list/">My List</Link></li>
            </ul>
          </nav>
          <Switch>
          <Route path="/battle/">
              <Battle />
            </Route>
          <Route path="/popular/">
              <Popular />
            </Route>
            <Route path="/popular-battle/">
              <Popular-battle />
            </Route>
            <Route path="/my-list/">
              <My-List />
            </Route>
            <Route path="/">
              <This-week />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;