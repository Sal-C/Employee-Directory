import React, { Component } from "react";
import Navbar from './components/Navbar';
import EmployeeCard from './components/EmployeeCard';
import employees from "./employees.json";

class App extends Component {
  state = {
      employees
  };

  filterFunction = () => {
    const employees = this.state.employees.filter(employees => employees.gamer === "Gamer")
    this.setState({ employees });
  }

  sortFunction = () => {
    const employees = this.state.employees.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({ employees });
  }
     
 render(){
     return(
       <div>
         <Navbar />
         <div className="row ml-3 mt-2">
              <button type="button" className="btn btn-primary" onClick={this.sortFunction}>Sort Alphabetically</button>
              <button type="button" className="btn btn-primary ml-1" onClick={this.filterFunction}>Filter Gamers</button>
          </div>
         {this.state.employees.map(employee => (
         <EmployeeCard
           id={employee.id}
           key={employee.id}
           name={employee.name}
           img={employee.img}
           occupation={employee.occupation}
           gamer={employee.gamer}
         />
       ))}
       </div>
     )
 }

}

export default App;