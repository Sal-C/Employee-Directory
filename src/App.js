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
     
 render(){
     return(
       <div>
         <Navbar />
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