
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Table from './Components/Table/Table';
import Form from './Components/Form/Form';


function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <Routes>
        <Route path='/' element={<Table/>} />
        <Route path='/form' element={<Form/>}/>
      </Routes> */}
      <Main/>
    </div>
  );
}

export default App;
