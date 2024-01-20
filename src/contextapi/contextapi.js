import React from 'react';
import { DataProvider } from './Data';
import Form from './Form1';
import Table from './Table1';
import 'bootstrap/dist/css/bootstrap.min.css';



const CONTEXTAPI = () => {
    return (
        <div>
         <h1>React Form and Table with Context API</h1>
            <DataProvider>
            <Form />
            <Table />
        
        </DataProvider>
        </div>
 );
    };
    export default CONTEXTAPI ;
    
  