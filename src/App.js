import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import MyAlgoConnect from "@randlabs/myalgo-connect";
import Sidebar from './components/DashBoard/Sidebar/Sidebar';
import MainDash from './components/DashBoard/MainDash/MainDash';
import Collection from './components/members/Members';
import { useState } from 'react'


function App() {

  const [address, setAddress] = useState(null);
    // const [products, setProducts] = useState([]);


  const connectWallet = async () => {
    new MyAlgoConnect().connect()
        .then(accounts => {
            const _account = accounts[0];
            setAddress(_account.address);
        }).catch(error => {
        console.log('Could not connect to MyAlgo wallet');
        console.error(error);
    })
};
  return (
    <div className="App">
      <div className ="AppGlass">
        <BrowserRouter>
        <button onClick={connectWallet}>CONNECT WALLET</button>
        <Sidebar/>
        <Routes>
        <Route exact path='/' element={<MainDash/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/Analytics' element={<div> </div>}></Route>
    </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
