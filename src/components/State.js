import React, { useState } from 'react';
import { Form as BootstrapForm, Button, Table } from 'react-bootstrap';
import { Table as BootstrapTable } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormAndTable = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm();

  const formData = watch();
  const [tableData, setTableData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [displayedData, setDisplayedData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGender, setSelectedGender] = useState("");







  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setValue(e.target.name, e.target.value);
  };


  const handleFormSubmit = (data) => {
    if (editingIndex !== null) {
      const updatedTableData = [...tableData];
      updatedTableData[editingIndex] = data;
      setTableData(updatedTableData);
      setEditingIndex(null);
    } else {
      setTableData([...tableData, data]);
    }
    setDisplayedData(tableData);
    
  };



  const dataToDisplay =
  searchTerm || selectedGender ? displayedData : tableData;



  useEffect(() => {
    let results = tableData;

    if (searchTerm) {
      results = results.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchTerm)
        )
      );
    }

    if (selectedGender) {
      results = results.filter(
        (item) => item.gender.toLowerCase() === selectedGender.toLowerCase()
      );
    }

    setDisplayedData(results);
  }, [searchTerm, selectedGender, tableData]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSelectedGender = (e) => {
    setSelectedGender(e.target.value);
  };

  
  const handleDelete = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
  };

  const edit = (index) => {
    const data = tableData[index];
    for (const key in data) {
      setValue(key, data[key]);
    }
    setEditingIndex(index);
  };

  const onClear = () => {
    reset();
  };


  

  return(
    <center>
    <div>
    <BootstrapForm onSubmit={handleSubmit((data) => {
      handleFormSubmit(data);
      onClear();
    })}>
    <BootstrapForm.Group controlId="formName">
    <BootstrapForm.Label>Name:</BootstrapForm.Label>
        <BootstrapForm.Control
          type="text"
          id="name"
          className={`form-control ${errors?.name ? "is-invalid" : ""}`}

          name="name"
          id="form"

          value={formData.name}
          onChange={handleChange}
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Only alphabetic characters are allowed",
            },
          })}
          onInput={(e) => {
            const input = e.target;
            const value = input.value;
            input.value = value.replace(/[^A-Za-z]/g, "");
            e.preventDefault();
          }}
        />
        {errors?.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
        </BootstrapForm.Group>
        <BootstrapForm.Group controlId="formemail">
        <BootstrapForm.Label>Email:</BootstrapForm.Label>
        <BootstrapForm.Control
          type="text"
          className={`form-control ${errors?.email ? "is-invalid" : ""}`}

          id="email"
          name="email"
          id="form"
          value={formData.email}
          onChange={handleChange}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
            validate: {
              uniqueEmail: (value) => {
                const isEmailExists = tableData.some(
                  (data) => data.email === value
                );
                return isEmailExists ? "Email already exists" : true;
              },
            },
          })}
        />
         {errors?.name && (
          <div className="invalid-feedback">{errors.name.message}</div>
        )}
      </BootstrapForm.Group>
      <BootstrapForm.Group controlId="formemail">
        <BootstrapForm.Label>number:</BootstrapForm.Label>
        <BootstrapForm.Control
          type="text"
          name="number"
          className={`form-control ${errors?.mobile ? "is-invalid" : ""}`}

          id="form"
          value={formData.number}
          onChange={handleChange}
          {...register("mobile", {
            required: "Mobile number is required",
            minLength: {
              value: 10,
              message: "Mobile number must be 10 digits",
            },
            maxLength: {
              value: 10,
              message: "Mobile number must be 10 digits",
            },
            pattern: {
              value: /^[0-9]*$/,
              message: "Only numeric characters are allowed",
            },
            validate: {
              uniqueMobile: (value) => {
                const isMobileExists = tableData.some(
                  (data) => data.mobile === value
                );
                return isMobileExists ? "Mobile number already exists" : true;
              },
            },
          })}
          onInput={(e) => {
            const input = e.target;
            const value = input.value;
            input.value = value.replace(/[^0-9]/g, "");
            e.preventDefault();
          }}
        />
         {errors?.mobile && (
          <div className="invalid-feedback">{errors.mobile.message}</div>
        )}
      </BootstrapForm.Group>


<div className="mb-3">
        <label>Gender</label>
        <div className="d-flex justify-content-evenly">
          <div className="form-check">
            <input
             
              type="radio"
              name="gender"
              className={`form-check-input ${
                errors?.gender ? "is-invalid" : ""
              }`}
              id="male"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
              {...register("gender", { required: "Gender is required" })}
            />

            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className={`form-check-input ${
                errors?.gender ? "is-invalid" : ""
              }`}
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
              {...register("gender", { required: "Gender is required" })}
            />

            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        {errors?.gender && (
          <div className="invalid-feedback">{errors.gender.message}</div>
        )}
      </div>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </BootstrapForm>

      <h1 className="text-center mb-4">Table  Details</h1>
      <div className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className="form-select"
          aria-label="Default select example"
          value={selectedGender}
          onChange={handleSelectedGender}
        >
          <option value="">Sort By Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
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
      </div>
      </center>

      
      
  )
}
export default FormAndTable;
