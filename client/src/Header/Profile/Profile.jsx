import React from "react";
import picture from "./profile-picture.jpg";
import "./Profile.css";

export default class Profile extends React.Component {
   state = {
      name: "John Doe"
   };

   render() {
      return <div className="profile-information">
         <img src={picture} alt="Profile"></img>
         <p>{this.state.name}</p>
      </div>
   }
}