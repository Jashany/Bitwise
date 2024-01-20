
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home.jsx';
import Sidebar from './Components/SideBar/Sidebar.jsx';
import Doctordash from './Pages/DoctorDash/Doctordash.jsx';
function App() {

  return (
    <>
     <BrowserRouter>
     {/* <Sidebar props={doctor} /> */}
      <Routes>
       
        <Route path='/' element={<Home/>}/>
        <Route path='/docdash' element={<Doctordash/>}/>
        <Route path='/parentdash' element={<Sidebar/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
