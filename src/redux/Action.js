
export const addData = (data) => ({
    type: 'ADD_DATA',
    payload: data,
  });
  
  export const editData = (id, newData) => ({
    type: 'EDIT_DATA',
    payload: { id, newData },
  });
  
  export const deleteData = (id) => ({
    type: 'DELETE_DATA',
    payload: id,
  });
  