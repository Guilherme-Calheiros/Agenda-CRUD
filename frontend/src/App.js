import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/form';
import Grid from './components/grid';

function App() {
  const [records, setRecords] =useState([])
  const [onEdit, setOnEdit] =useState(null)

  const getRecords = async () => {
    try {
      const res = await axios.get("http://localhost:8800")
      setRecords(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    getRecords()
  }, [setRecords])

  return (
    <div className='flex flex-col items-center pt-5'>
      <div className='container w-full max-w-4xl mt-5 flex flex-col items-center gap-3'>
        <h2>Registros</h2>
        <Form/>
        <Grid records={records}/>
      </div>
      <ToastContainer autoClose={3000} position='bottom-left'/>
    </div>
  );
}

export default App;
