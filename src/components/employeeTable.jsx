import React, { Component }from 'react';
import Employee from './employee'
import employees from './employees.json'

class EmployeeTable extends Component {

    state = {
        employees
    };
        
      render() { 
        return (
          <div className="container-fluid">
          <div className="row">
          <main role="main" class="col-md-12">
      
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th><a>Employee ID</a></th>
              <th><a>First Name</a></th>
              <th><a>Last Name</a></th>
              <th><a>Department</a></th>
              <th><a>Title</a></th>
            </tr>
          </thead>
          <tbody>
            <Employee employees={employees} />
          </tbody>
        </table>
      </div>
    </main>
        </div>
        </div>
        );
        }
}
 
export default EmployeeTable;