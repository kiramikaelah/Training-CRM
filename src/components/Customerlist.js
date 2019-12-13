import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';
import Snackbar from '@material-ui/core/Snackbar';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Customerlist = () => {
  const [customer, setCustomer] = useState([]);
  const [open, setOpen] = useState(false);


const handleClose = (event, reason) => {
      setOpen(false);
      }
  
const fetchData = () => {
      fetch('https://customerrest.herokuapp.com/api/customers')
      .then(response => response.json())
      .then(data => {
          setCustomer(data.content);
      })
      }
    useEffect(() => {
        fetchData(); 
     }, [])

const deleteCustomer = (link) => {
   if (window.confirm('Are you sure?')) {
        fetch(link, {method: 'DELETE'})
       .then(res => fetchData())
       .then (res => setOpen(true))
       .catch(err => console.error(err))
      }
  }

  const saveCustomer = (newCustomer) => {
      fetch('https://customerrest.herokuapp.com/api/customers/',
      {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCustomer)
      }
      )
      .then(res => fetchData())
      .catch(err => console.error(err))
  }

  const editCustomer = (customer, link) => {
    fetch(link,
    {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
    }
    )
    .then(res => fetchData())
    .catch(err => console.error(err))
} 


const columns = [
      {
      Header: 'First name',
      accessor: 'firstname'
      },
      {
      Header: 'Last name',
      accessor: 'lastname' 
      },
      {
      Header: 'Street address',
      accessor: 'streetaddress'
      },
      {
      Header: 'Post code',
      accessor: 'postcode'
      },
      {
      Header: 'City',
      accessor: 'city'
      },
      {
      Header: 'Email',
      accessor: 'email'
      },
      {
      Header: 'Phone',
      accessor: 'phone'
      },
      {
      accessor: 'links[0].href',
      filterable: false,
      sortable: false,
      Cell: ({value}) => <DeleteOutlinedIcon size="small" color="secondary" onClick={() => deleteCustomer(value)}></DeleteOutlinedIcon>
      },
      {
      accessor: 'links[0].href',
      filterable: false,
      sortable: false,
      Cell: row => <EditCustomer customer={row.original} editCustomer={editCustomer}/>
      }
  ]

  return (
      <div>
       <AddCustomer saveCustomer={saveCustomer}/>
       <ReactTable filterable={true} columns={columns} data={customer}/>
       <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message='Customer deleted' />
      </div>
  );
};

export default Customerlist;