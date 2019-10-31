import React from 'react';
import "./Nav.css";
import JediOrder from "./icons/JediOrder";
import PsyDuck from "./icons/Psyduck";
import Rupee from "./icons/Rupee";
import Spock from "./icons/Spock";

export default class Nav extends React.Component {
   render() {
      return <nav>
         <div>
            <div className="link">
               <JediOrder />
               <label>Overview</label>
            </div>
            <div className="link">
               <PsyDuck />
               <label>Insights</label>
            </div>
            <div className="link">
               <Rupee />
               <label>Transactions</label>
            </div>
            <div className="link">
               <Spock />
               <label>Services</label>
            </div>
         </div>
         <hr />
         <div>
            <div className="link">
               <JediOrder />
               <label>Accounts</label>
            </div>
            <div className="link">
               <Rupee />
               <label>Settings</label>
            </div>
         </div>
      </nav>
   }
}