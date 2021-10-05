import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutAKA from './components/About AKA/AboutAKA';
import Coaches from './components/Coaches/Coaches';
import Footer from './components/Footer/Footer';
import Graduetes from './components/Graduetes/Graduetes';
import Header from './components/Header/Header';
import NotFund from './components/NotFound/NotFund';
import Services from './components/Services/Services';
import ServicesDemo from './components/ServicesDemo/ServicesDemo';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <ServicesDemo></ServicesDemo>
          </Route>
          <Route path="/home">
            <ServicesDemo></ServicesDemo>
          </Route>
          <Route path="/services">
              <Services></Services>
          </Route>
          <Route path="/about">
              <AboutAKA></AboutAKA>
          </Route>
          <Route path="/coaches">
              <Coaches></Coaches>
          </Route>
          <Route path="/graduetes">
              <Graduetes></Graduetes>
          </Route>
          <Route path="*">
            <NotFund></NotFund>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
