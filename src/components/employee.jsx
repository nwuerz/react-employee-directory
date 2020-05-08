import React from 'react';


function Employee(props) {
    return (
        props.employees.map(employee => (
            <tr>
                <td key={employee.id}>
                    {employee.id}
                </td>
                <td key={employee.id}>
                    {employee.firstName}
                </td>
                <td key={employee.id}>
                    {employee.lastName}
                </td>
                <td key={employee.id}>
                    {employee.department}
                </td>
                <td key={employee.id}>
                    {employee.title}
                </td>
            </tr>
            ))     
    );
}
 
export default Employee;