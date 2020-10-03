import React from 'react';
import './App.css';
import Navbar from './Page/Navbar'
import Home from './Page/Home'
import Contact from './Page/Contact'
import About from './Page/About'
import Detailuser from './Page/Detailuser'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import UserNotFound from './Page/UserNotFound';
import ProtectedRoute from './Component/ProtecteRoute';
import Login from './Page/Login';
import Register from './Page/Register';

function App() {
  // const [kelas, setKelas] = React.useState();
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <ProtectedRoute path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/DetailUser/:id" component={Detailuser} />
          <Route path="/UserNotFound" component={UserNotFound} />
          <Route path="/Login" component={Login} />
          <Route path="/R egister" component={Register} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
