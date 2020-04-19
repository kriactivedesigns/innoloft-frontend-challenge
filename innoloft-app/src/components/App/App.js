import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from '../Header/Header'
import LeftSideMenu from '../LeftSideMenu/LeftSideMenu'
import Home from '../Home/Home'
import MyAccountPage from '../MyAccountPage/MyAccountPage'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import './App.scss';

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home/>
  },
  {
    path: "/myaccount",
    exact: true,
    main: () => <MyAccountPage/>
  }
]

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <div className="main-content">
          <Router>
            <LeftSideMenu/>
            <Switch>
              {routes.map((route,index) => (
                <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main/>}
                  />
              ))}
            </Switch>
          </Router>
        </div>
      </div>
    </Provider>
  );
}

export default App;
