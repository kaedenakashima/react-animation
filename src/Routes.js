import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from 'react-router-dom';

function useRouter() {
  return useContext(__RouterContext);
}

const Routes = () => {
  return (
    <Router>
      <ul className='router-nav'>
        <NavLink to='/'>One</NavLink>
        <NavLink to='/two'>Two</NavLink>
        <NavLink to='/three'>Three</NavLink>
      </ul>
    </Router>
  );
};

const Main = () => {
  const { location } = useRouter();
  console.log('location:', location);
  return (
    <div>
      <Switch>
        <Route exact path='/' component={One} />
        <Route exact path='/two' component={Two} />
        <Route exact path='/three' component={Three} />
      </Switch>
    </div>
  );
};

function NavLink(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  );
}

const One = () => {
  return (
    <div className='page-route'>
      <h1>One</h1>
    </div>
  );
};
const Two = () => {
  return (
    <div className='page-route two'>
      <h1>Two</h1>
    </div>
  );
};
const Three = () => {
  return (
    <div className='page-route three'>
      <h1>Three</h1>
    </div>
  );
};

export default Routes;
