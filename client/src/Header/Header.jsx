import React from 'react';
import Nav from "./Nav/Nav";
import "./Header.css";

export default class Header extends React.Component {
   render() {
      return <header className="App-header" >
         <div className="profile">
            <p></p>
         </div>
         <div className="not-profile">
            <Nav />
         </div>
      </header>
   }
}