// src/components/Table.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editData, deleteData } from './Action';

const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleEdit = (id, newData) => {
    // Dispatch the action to edit data
    dispatch(editData(id, newData));
  };

  const handleDelete = (id) => {
    // Dispatch the action to delete data
    dispatch(deleteData(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>

          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.number}</td>

            <td>
              <button onClick={() => handleEdit(item.id, { name: '', email: '' , number:'' })}>Edit</button>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
