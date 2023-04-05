import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import './App.css';
import Sidebar from './components/DashBoard/Sidebar/Sidebar';
import MainDash from './components/DashBoard/MainDash/MainDash';
import Students from './components/students/Students';


function App() {
  return (
    <div className="App">
      <div className ="AppGlass">
        <Sidebar/>
        <BrowserRouter>
        <Routes>
        <Route path='/dashboard' element={<MainDash/>}></Route>
        <Route path='/' element={<Students/>}></Route>
        <Route path='/Analytics' element={<div> </div>}></Route>
    </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
