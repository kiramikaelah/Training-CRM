import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import AddTraining from './AddTraining';
import 'react-table/react-table.css';
import Snackbar from '@material-ui/core/Snackbar';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import moment from 'moment';


const Traininglist = () => {
  const [workout, setWorkout] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [open, setOpen] = useState(false);


const handleClose = (event, reason) => {
      setOpen(false);
      }
  
const fetchData = () => {
      fetch('https://customerrest.herokuapp.com/gettrainings')
      .then(response => response.json())
      .then(data => {
          setWorkout(data);
          setCustomer(data.map((x) => x.customer));
      })
      }

    useEffect(() => {
        fetchData(); 
     }, [])

const deleteTraining = (id) => {
   if (window.confirm('Are you sure?')) {
        fetch('https://customerrest.herokuapp.com/api/trainings/' + id, {method: 'DELETE'})
       .then(res => fetchData())
       .then (res => setOpen(true))
       .catch(err => console.error(err))
      }
  }

  const saveTraining = (newTraining) => {
      fetch('https://customerrest.herokuapp.com/api/trainings/',
      {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTraining)
      }
      )
      .then(res => fetchData())
      .catch(err => console.error(err))
  }


const columns = [
      {
      Header: 'ID',
      accessor: 'id'
      },
      {
      Header: 'Activity',
      accessor: 'activity'
      },
      {
      id: 'date',
      Header: 'Date',
      accessor: d => {
        return moment(d.date)
        .format("DD-MM-YYYY")
      }
      },
      {
      Header: 'Duration',
      accessor: 'duration'
      },
      {
      Header: 'First name',
      accessor: 'customer.firstname'
      },
      {
      Header: 'Last name',
      accessor: 'customer.lastname'
      },
      {
      accessor: 'id',
      filterable: false,
      sortable: false,
      Cell: ({value}) => <DeleteOutlinedIcon size="small" color="secondary" onClick={() => deleteTraining(value)}></DeleteOutlinedIcon>
      },
  ]

  return (
      <div>
       <AddTraining saveTraining={saveTraining}/>
       <ReactTable filterable={true} columns={columns} data={workout}/>
       <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message='Training deleted' />
      </div>
  );
};

export default Traininglist;
