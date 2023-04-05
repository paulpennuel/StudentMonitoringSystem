import { useEffect } from 'react'
import React, {useState} from 'react'
import CustomizedTables from './TableStudents/TableStudents'
import Search from 'antd/es/input/Search'
import axios from "axios"


const Students = () => {

  const [users,setUsers] = useState([])

  useEffect(() =>{
      loadUsers();
  },[]);

  const  loadUsers = async() =>{
    const results = await axios.get(" ")
    console.log(results)
  }
  return (
    <div className='Student'>
        <Search/>
        <CustomizedTables/>
    </div>
  )
}

export default Students