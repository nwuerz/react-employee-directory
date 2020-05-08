import React from 'react';
import Employee from './employee'

const employees = [
    {
        id: 1,
        firstName: "Ryan",
        lastName: "Fleming",
        department: "Sales",
        title: "Manager"
    },
    {
        id: 2,
        firstName: "John",
        lastName: "Ortiz",
        department: "Sales",
        title: "Sales Rep"
    },
    {
        id: 3,
        firstName: "Dale",
        lastName: "Gatlin",
        department: "Sales",
        title: "Sales Rep"
    },
    {
        id: 4,
        firstName: "Ryan",
        lastName: "Fleming",
        department: "Sales",
        title: "Manager"
    },
];

const EmployeeTable = () => {
        return (
            <div className="container-fluid">
          <div className="row">
          <main role="main" class="col-md-12">

          <canvas height="40"></canvas>

      
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
    
 
export default EmployeeTable;