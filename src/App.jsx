import React from 'react';
import './App.css';
import Navbar from './Page/Navbar'
import Home from './Page/Home'
import Contact from './Page/Contact'
import About from './Page/About'
import Detailuser from './Page/Detailuser'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import UserNotFound from './Page/UserNotFound';
import ProtectedRoute from './Component/ProtectedRoute';
import Login from './Page/Login';
import Register from './Page/Register';
import ProtectedLogin from './Component/ProtectedLogin';

function App() {
  // const [kelas, setKelas] = React.useState();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path="/" exact>
            <Navbar>
              <Home/>
            </Navbar>
          </ProtectedRoute>
          <Route path="/about">
            <Navbar>
              <About/>
            </Navbar>
          </Route>
          <Route path="/contact">
            <Navbar>
              <Contact/>
            </Navbar>
          </Route>
          <Route path="/DetailUser/:id" component={Detailuser} />
          <Route path="/UserNotFound">
            <Navbar />
            <UserNotFound/>
          </Route>
          <ProtectedLogin path="/Login" component={Login} />
          <ProtectedLogin path="/Register" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
