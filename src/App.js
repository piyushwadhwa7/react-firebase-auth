import './App.css';
// import Header from './Components/header';
// import MainContent from './Components/main';
// import Footer from './Components/footer';
import Avatar from './Components/avatarlistt';
import './Avatar.css';
import Footer from './Components/footer';
import Header from './Components/header';
import {Routes, Route} from 'react-router-dom';
import Signup from './Components/Signup';
import { UserAuthContextProvider } from "./Context/UserAuthcontext";
import Avatarlist from './Components/avatarlistt';

//import Signup from './Components/Signup';
//import {React, Switch} from 'react-router-dom';

function App() {
  return (
    <div className='body'>
      <div>
        <Header title="React webpage"/>
        <UserAuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Signup />
            }>
          </Route>
          <Route
            path="/home"
            element={
              <Avatarlist />
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
