import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <span className="navbar-brand mb-0 h1">Employee Directory</span>
            </nav>
        </div>
    );
  }
}

export default Navbar;