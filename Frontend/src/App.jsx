
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home.jsx';
import Sidebar from './Components/SideBar/Sidebar.jsx';
import Doctordash from './Pages/DoctorDash/Doctordash.jsx';
import Parentdash from './Pages/ParentDash/Parentdash.jsx';
import Parentlogin from './Pages/Parentlogin/Parentlogin.jsx';


function App() {

  return (
    <>
     <BrowserRouter>
     {/* <Sidebar props={doctor} /> */}
      <Routes>
       
        <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Parentlogin/>}/>
        {/* <Route path='/doctorlogin' element={<DoctorLogin/>}/> */}
        <Route path='/docdash' element={<Doctordash/>}/>
        <Route path='/parentdash' element={<Parentdash/>}/>
        {/* <Route path='/color' element={<ColorGuessingGame/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
