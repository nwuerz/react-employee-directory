import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Employee Directory</a>
          <input className="form-control form-control-dark " type="text" placeholder="Filter" aria-label="Filter"/>
        </nav>
    );
};

export default NavBar;