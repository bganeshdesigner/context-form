// src/components/Form.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData } from './Action'

const Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', Number: '' , email: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic 

    // Dispatch  action to add data
    dispatch(addData({ ...formData, id: Date.now() }));
    // Reset the form
    setFormData({ name: '', email: '' , number:'' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      <label>Email:</label>
      <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
      <label>Number:</label>
      <input type="text" name="number" value={formData.number} onChange={handleInputChange} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
