import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import Sidebar from './components/DashBoard/Sidebar/Sidebar';
import MainDash from './components/DashBoard/MainDash/MainDash';
import Collection from './components/members/Members';


function App() {
  return (
    <div className="App">
      <div className ="AppGlass">
        <BrowserRouter>
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
