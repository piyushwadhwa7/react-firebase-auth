import './App.css';
// import Header from './Components/header';
// import MainContent from './Components/main';
// import Footer from './Components/footer';
//import Avatar from './Components/avatarlistt';
import './Avatar.css';
import Footer from './Components/footer';
import Header from './Components/header';
import {Routes, Route} from 'react-router-dom';
import Signup from './Components/Signup';
import { UserAuthContextProvider } from "./Context/UserAuthcontext";
import Avatarlist from './Components/avatarlistt';
import Login from './Components/Login';

//import Signup from './Components/Signup';
//import {React, Switch} from 'react-router-dom';

function App() {
  return (
    <div className='body'>
      <div>
        <Header imgsrc="pikachu.jpeg" alt="pikachu"/>
        <UserAuthContextProvider>
        <Routes>
        <Route
            path="/"
            element={
              <Login />
            }>
          </Route>
          <Route
            path="/signup"
            element={
              <Signup />
            }>
          </Route>
          <Route
            path="/home"
            element={
              <Avatarlist className="card-list" />
            }>
          </Route>
        </Routes>
        </UserAuthContextProvider>
        <Footer />
      </div>

    </div>
  );
}

export default App;
