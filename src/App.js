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
import PopularBattle from './components/DiscoverBattle';
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">This week</Link></li>
              <li><Link to="/battle/">This week battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular battle</Link></li>
              <li><Link to="/my-list/">My List</Link></li>
            </ul>
          </nav>
          <Switch>
          <Route path="/battle/">
              <DiscoverBattle />
            </Route>
          <Route path="/popular/">
              <Popular />
            </Route>
            <Route path="/popular-battle/">
              <PopularBattle />
            </Route>
            <Route path="/my-list/">
              <MyList />
            </Route>
            <Route path="/">
              <Discover />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;