import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import ViewUser from './Component/ViewUser';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/adduser' Component={AddUser}></Route>
        <Route path='/viewuser/:id' Component={ViewUser}></Route>
        <Route path='/edituser/:id' Component={EditUser}></Route>
      </Routes>
    </div>
  );
}

export default App;
