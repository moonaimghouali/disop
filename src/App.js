import './assets/styles/App.css';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Error,Login } from './pages/common';
import { Utilisateurs, Regions, Secteurs, Perimetres, Unites } from './pages/admin';
import { Dashboard } from "./pages/dp";
import { Sidebar } from './components';

function App() {
  const isLogedin = false;
  const isAdmin = false
  const isManager = false
  

  return (
    <div className='bg-white '>
      
      <BrowserRouter>
       <div className='flex'>
      {isLogedin && (<Sidebar/>)}
         <Routes>
          {/* Disop Routes */}
          <Route path='/login' element = {<Login/>}/>

          {/* Admin Routes */}
          <Route path='p/admin/utilisateurs' element={isLogedin? (isAdmin? <Utilisateurs/> : <Error/>) : (<Login/>)}/>
          <Route path='p/admin/regions' element={isLogedin? (isAdmin? <Regions/> : <Error/>) : (<Login/>)}/>
          <Route path='p/admin/secteurs' element={isLogedin? (isAdmin? <Secteurs/> : <Error/>) : (<Login/>)}/>
          <Route path='p/admin/perimetres' element={isLogedin? (isAdmin? <Perimetres/> : <Error/>) : (<Login/>)}/>
          <Route path='p/admin/unites' element={isLogedin? (isAdmin? <Unites/> : <Error/>) : (<Login/>)}/>

          {/* Unite Routes */}

          {/* Dashboard Routes */}
          <Route path='/dashboard' element={isLogedin? (isManager? <Dashboard/> : <Error/>) : (<Login/>)}/>

         </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
