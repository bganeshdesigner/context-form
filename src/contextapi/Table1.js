
import React  from 'react';
import DataContext from './Data';
import  { useState } from 'react';

// import DataContext from './Data';
// import { Table as BootstrapTable } from 'react-bootstrap';


const Table = () => {


const {searchTerm , handleSearch ,selectedGender ,handleSelectedGender ,  edit ,handleDelete }= DataContext;
const [tableData, setTableData] = useState([]);
const [displayedData, setDisplayedData] = useState([]);

const dataToDisplay =
searchTerm || selectedGender ? displayedData : tableData;
  
  return (
    <center>
      
   
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Action</th>

          </tr>

        </thead>
        <tbody>
          
          {dataToDisplay.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>{data.gender}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm rounded-pill me-2 px-2"
                  onClick={() => edit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm rounded-pill px-2"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </center>
  );
};

export default Table;
