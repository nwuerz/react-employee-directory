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
        firstName: "Bronson",
        lastName: "Skinner",
        department: "Sales",
        title: "Sales Rep"
    },
    {
        id: 5,
        firstName: "Eric",
        lastName: "Ariza",
        department: "Service",
        title: "Manager"
    },
    {
        id: 6,
        firstName: "Teresa",
        lastName: "Myers",
        department: "Service",
        title: "Service Rep"
    },
    {
        id: 7,
        firstName: "Victor",
        lastName: "Segura",
        department: "Service",
        title: "Service Rep"
    },
    {
        id: 8,
        firstName: "Amanda",
        lastName: "Mahoney",
        department: "Service",
        title: "Service Rep"
    },
    {
        id: 9,
        firstName: "Jason",
        lastName: "Holland",
        department: "Underwriting",
        title: "Manager"
    },
    {
        id: 10,
        firstName: "Donia",
        lastName: "Story",
        department: "Underwriting",
        title: "Underwriter"
    },
    {
        id: 11,
        firstName: "Joseph",
        lastName: "Yapp",
        department: "Underwriting",
        title: "Underwriter"
    },
    {
        id: 12,
        firstName: "James",
        lastName: "Crenshaw",
        department: "Underwriting",
        title: "Underwriter"
    },
    {
        id: 13,
        firstName: "Joseph",
        lastName: "Loung",
        department: "Claims",
        title: "Manager"
    },
    {
        id: 14,
        firstName: "Weston",
        lastName: "Britt",
        department: "Claims",
        title: "Claims Rep"
    },
    {
        id: 15,
        firstName: "Raul",
        lastName: "Acosta",
        department: "Claims",
        title: "Claims Rep"
    },
    {
        id: 16,
        firstName: "Justin",
        lastName: "Walters",
        department: "Claims",
        title: "Claims Rep"
    },
];

const EmployeeTable = () => {
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
    
 
export default EmployeeTable;