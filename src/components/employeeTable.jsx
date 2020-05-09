import React, { Component } from 'react';
import Employee from './employee'
import employees from './employees.json'

class EmployeeTable extends Component {

    state = {
        employees
    };
        
      render() { 
          //Each render we can look at employees and filter them down based on filterval.

          // const newEmployees = employees
          // .filter(employee => {
          //     let existsIn = false
          //     Object.keys(employee).forEach(key => {
          //         const currentVal = employee[key];
          //         console.log(currentVal, this.props.filterVal);
          //     });
          //    return existsIn;
          // });

        return (
          <div className="container-fluid">
          <div className="row">
          <main role="main" class="col-md-12">
      
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th><a href="#">Employee ID</a></th>
              <th><a href="#">First Name</a></th>
              <th><a href="#">Last Name</a></th>
              <th><a href="#">Department</a></th>
              <th><a href="#">Title</a></th>
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