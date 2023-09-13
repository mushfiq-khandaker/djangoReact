import './App.css';
import Navigation from './components/Navigation';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Home from './components/Home'
import Students from './components/Students'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation></Navigation>
      
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/students' element={<Students></Students>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
