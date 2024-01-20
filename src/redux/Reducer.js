
const initialState = {
    data: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_DATA':
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case 'EDIT_DATA':
        return { 
          ...state,
          data: state.data.map(item =>
            item.id === action.payload.id ? action.payload.newData : item.id 
          ),
        };
      case 'DELETE_DATA':
        return {
          ...state,
          data: state.data.filter(item => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  