import './assets/styles/App.css';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Error,Login, Profile } from './pages/common';
import { Utilisateurs, Regions, Secteurs, Perimetres, Unites } from './pages/admin';
import { Dashboard, DpProduction, Kpi, Map, Reporting } from "./pages/dp";
import{ Mouvements, Production, Stockage, Commentaires, MouvementBac} from './pages/unite'
import { Sidebar } from './components';
import { useSelector } from 'react-redux';

function App() {

  const { isSignedIn, isAdmin, isManager, isUnite, isRespUnite} = useSelector((state)=> state.user);

  return (
    <div className='bg-white '>
      
      <BrowserRouter>
       <div className='flex'>
      {isSignedIn && (<Sidebar/>)}
         <Routes>
          {/* Disop Routes */}
          <Route path='/login' element = {!isSignedIn ? (<Login/>) : 
          ((isUnite || isRespUnite) ? (<Navigate to="/p/unite/mouvements" replace={true}/>) : 
          (isManager ? (<Navigate to="/p/dp/dashboard" replace={true}/>) : 
          (isAdmin && (<Navigate to="/p/admin/utilisateurs" replace={true}/>) )))}/>

          <Route path="/" element={<Navigate to="/login" replace/>} />
          <Route path='/profile' element={isSignedIn?  (<Profile/> ) : (<Navigate to="/login" replace/>)}/>

          <Route path='*' element = {!isSignedIn ? (<Navigate to="/login" replace/>) : (<Error/>)}/>

          {/* Admin Routes */}
          <Route path='p/admin/utilisateurs' element={isSignedIn? (isAdmin? <Utilisateurs/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/admin/regions' element={isSignedIn? (isAdmin? <Regions/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/admin/secteurs' element={isSignedIn? (isAdmin? <Secteurs/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/admin/perimetres' element={isSignedIn? (isAdmin? <Perimetres/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/admin/unites' element={isSignedIn? (isAdmin? <Unites/> : <Error/>) : (<Navigate to="/login" replace/>)}/>

          {/* Unite Routes */}
          <Route path='p/unite/mouvements' element={isSignedIn? ((isUnite || isRespUnite) ? <Mouvements/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/mouvement' element={isSignedIn? ((isUnite || isRespUnite) ? <MouvementBac/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/production' element={isSignedIn? ((isUnite || isRespUnite) ? <Production/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/stock' element={isSignedIn? ((isUnite || isRespUnite) ? <Stockage/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/commentaires' element={isSignedIn? ((isUnite || isRespUnite) ? <Commentaires/> : <Error/>) : (<Navigate to="/login" replace/>)}/>

          {/* dp Routes */}
          <Route path='p/dp/dashboard' element={isSignedIn? (isManager? <Dashboard/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/dp/production' element={isSignedIn? (isManager? <DpProduction/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/dp/performance' element={isSignedIn? (isManager? <Kpi/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/dp/reporting' element={isSignedIn? (isManager? <Reporting/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/dp/carte' element={isSignedIn? (isManager? <Map/> : <Error/>) : (<Navigate to="/login" replace/>)}/>

         </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
