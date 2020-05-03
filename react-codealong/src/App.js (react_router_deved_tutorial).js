import React from 'react';
import './components_for_react_router_deved_tutorial/router.css';
import Nav from './components_for_react_router_deved_tutorial/Nav';
import About from './components_for_react_router_deved_tutorial/About';
import Shop from './components_for_react_router_deved_tutorial/Shop';
import ItemDetail from './components_for_react_router_deved_tutorial/ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* NOTE: there are two places to put "exact" and you only need one of them */}
          <Route /*exact*/ path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
