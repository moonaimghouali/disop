import './assets/styles/App.css';
import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Test, Error,Login, Profile } from './pages/common';
import { Utilisateurs, Regions, PuitsAdmin, Perimetres, Unites } from './pages/admin';
import { Dashboard, DpProduction, Kpi, Map, Reporting } from "./pages/dp";
import { RegionDashboard, RegionProduction, RegionKPI } from "./pages/region";
import { Mouvements, Production, Stockage, Analyses, Baremage, Commentaires, MouvementBac, NouveauBac, LabPlanning, LabAnalyses, BcPlanning, Planning} from './pages/unite'
import { EpMonitoring, EpPerimetres, EpProduction, Puits, EpConfig} from './pages/ep'
import { XpProduction, XpUnites,XpPerimetres, Previsions, XpCommentaires} from './pages/xp'
import { Sidebar } from './components';
import { useSelector } from 'react-redux';
import { roles } from './store/types/roles';

// import 'react-toastify/scss'

function App() {

  // const { isSignedIn, isAdmin, isManager, isUnite, isRespUnite} = useSelector((state)=> state.user);
  const user = useSelector((state)=> state.user)

  const isSignedIn = user.isSignedIn 
  const isAdmin = (user.userInfo.role === roles.Admin)
  const isManager = (user.userInfo.role === roles.Manager)
  const isRespRegion = (user.userInfo.role === roles.RespRegion)
  const isUnite =  (user.userInfo.role === roles.Unite)
  const isLab =  (user.userInfo.role === roles.Lab)
  const isRespUnite =  (user.userInfo.role === roles.RespUnite)
  const isEP = (user.userInfo.role === roles.EP)
  const isXP = (user.userInfo.role === roles.XP)

  return (
    <div className='bg-white '>
      
      <BrowserRouter>
       <div className='flex'>
      {isSignedIn && (<Sidebar/>)}
         <Routes>

          {/* Disop Routes */}
          <Route path='/login' element = {!isSignedIn ? (<Login/>) : 
          ( isRespUnite ? (<Navigate to="/p/unite/production" replace={true}/>) : 
          ( isUnite) ? (<Navigate to="/p/unite/mouvements" replace={true}/>) :
          (isLab ? (<Navigate to="/p/unite/lab/analyses" replace={true}/>) :
          (isManager ? (<Navigate to="/p/dp/dashboard" replace={true}/>) : 
          (isEP ? (<Navigate to="/p/ep/puits-monitoring" replace={true}/>) : 
          (isXP ? (<Navigate to="/p/xp/production" replace={true}/>) :  
          (isRespRegion ? (<Navigate to="/p/region/dashboard" replace={true}/>) :  
          (isAdmin && (<Navigate to="/p/admin/utilisateurs" replace={true}/>) )))))))} />

          <Route path="/" element={<Navigate to="/login" replace/>} />
          <Route path='/profile' element={isSignedIn?  (<Profile/> ) : (<Navigate to="/login" replace/>)}/>

          <Route path='*' element = {!isSignedIn ? (<Navigate to="/login" replace/>) : (<Error/>)}/>

          {/* Admin Routes */}
          <Route path='p/admin/utilisateurs' element={isSignedIn? (isAdmin? <Utilisateurs/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/admin/regions' element={isSignedIn? (isAdmin? <Regions/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/admin/puits' element={isSignedIn? (isAdmin? <PuitsAdmin/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/admin/perimetres' element={isSignedIn? (isAdmin? <Perimetres/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/admin/unites' element={isSignedIn? (isAdmin? <Unites/> : <Error/>) : (<Navigate to="/login" replace/>)}/>

          {/* Unite Routes */}
          <Route path='p/unite/mouvements' element={isSignedIn? ((isUnite || isRespUnite) ? <Mouvements/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/mouvement' element={isSignedIn? ((isUnite || isRespUnite) ? <MouvementBac/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/production' element={isSignedIn? ((isUnite || isRespUnite) ? <Production/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/stock' element={isSignedIn? ((isUnite || isRespUnite) ? <Stockage/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/bacs/baremage/:id' element={isSignedIn? ((isUnite || isRespUnite) ? <Baremage/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/bacs/nouveau' element={isSignedIn? ((isRespUnite) ? <NouveauBac/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/commentaires' element={isSignedIn? ((isRespUnite) ? <Commentaires/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          
          <Route path='p/unite/planning' element={isSignedIn? ((isRespUnite) ? <Planning/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/bc/planning' element={isSignedIn? ((isUnite) ? <BcPlanning/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          
          <Route path='p/unite/lab/planning' element={isSignedIn? ((isLab) ? <LabPlanning/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/lab/analyses' element={isSignedIn? ((isLab || isRespUnite || isUnite) ? <Analyses/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/unite/lab/analyses/new' element={isSignedIn? ((isLab ) ? <LabAnalyses/> : <Error/>) : (<Navigate to="/login" replace/>)}/>


          {/* XP Routes */}
          <Route path='p/xp/production' element={isSignedIn? ((isXP) ? <XpProduction/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/xp/unites' element={isSignedIn? ((isXP) ? <XpUnites/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/xp/perimetres' element={isSignedIn? ((isXP) ? <XpPerimetres/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/xp/previsions' element={isSignedIn? ((isXP) ? <Previsions/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/xp/commentaires' element={isSignedIn? ((isXP) ? <XpCommentaires/> : <Error/>) : (<Navigate to="/login" replace/>)}/>


          {/* EP Routes */}
          <Route path='p/ep/puits-monitoring' element={isSignedIn? ((isEP) ? <EpMonitoring/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/ep/puits' element={isSignedIn? ((isEP) ? <Puits/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/ep/perimetres' element={isSignedIn? ((isEP) ? <EpPerimetres/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/ep/production' element={isSignedIn? ((isEP) ? <EpProduction/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/ep/puits-config' element={isSignedIn? ((isEP) ? <EpConfig/> : <Error/>) : (<Navigate to="/login" replace/>)}/>

          {/* regions Routes */}
          <Route path='p/region/dashboard' element={isSignedIn? (isRespRegion? <RegionDashboard/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/region/production' element={isSignedIn? (isRespRegion? <RegionProduction/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
          <Route path='p/region/performance' element={isSignedIn? (isRespRegion? <RegionKPI/> : <Error/>) : (<Navigate to="/login" replace/>)}/>
   
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
