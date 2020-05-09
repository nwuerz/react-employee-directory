import React from 'react';

const NavBar = (prop) => {
    return (
        <nav className="navbar navbar-dark bg-dark shadow">
          <h2 className="navbar-brand">Employee Directory</h2>
          <input onChange={prop.changeHandler} value={prop.filterVal} className="form-control form-control-dark " type="text" placeholder="Filter" aria-label="Filter"/>
        </nav>
    );
};

export default NavBar;