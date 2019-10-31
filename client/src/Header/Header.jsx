import React from 'react';
import Nav from "./Nav/Nav";
import "./Header.css";
import Profile from "./Profile/Profile";
import Alert from "./icons/Alert";
import Search from "./icons/Search";

export default class Header extends React.Component {
   render() {
      return <header className="App-header">
         <div className="profile-and-operations">
            <div className="operations">
               <Alert />
               <Search />
            </div>
            <Profile />
         </div>
         <div className="navBar">
            <Nav />
         </div>
      </header>
   }
}