
import React, { createContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {


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
return (
    <DataContext.Provider 
   value={{onClear ,
    edit , handleChange
     , handleDelete , handleFormSubmit
      , handleSearch , handleSelectedGender ,
       handleSubmit , dataToDisplay }}>


      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

