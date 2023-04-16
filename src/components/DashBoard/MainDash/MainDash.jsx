import React from 'react'
import "./MainDash.css"
import Cardboards from '../Cards/CardBoards';
import Table from '../Table/Table';


const MainDash = () => {
    return (
    <div className='MainDash'>
        <h1>Dashboard</h1>
        <Cardboards/>
        <Table/>
    </div>
    );
}

export default MainDash
