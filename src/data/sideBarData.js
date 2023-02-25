import { FiUsers} from 'react-icons/fi'
import { BsArrowLeftRight } from 'react-icons/bs'
import {GiOilRig, GiOilPump, GiWaterDrop, GiOilDrum} from 'react-icons/gi'
import { BiDroplet } from 'react-icons/bi'
import { TbBuildingFactory} from 'react-icons/tb'
import { MdOutlineModeComment } from 'react-icons/md'


export const adminLinks = [
    {
      name: 'Utilisateurs',
      path : "p/admin/utilisateurs",
      icon: <FiUsers size={18}/>,
    },
    {
      name: 'Regions',
      path : "p/admin/regions",
      icon: <FiUsers size={18}/>,
    },
    {
      name: 'Secteurs',
      path : "p/admin/secteurs",
      icon: <FiUsers size={18}/>,
    },
    {
      name: 'Perimetres',
      path : "p/admin/perimetres",
      icon: <GiOilPump size={20}/>,
    },
    {
      name: 'Unites',
      path : "p/admin/unites",
      icon: <TbBuildingFactory size={18}/>,
    },
  ]

  export const dpLinks = [
    {
      name: 'Dashboard',
      path : "p/dp/dashboard",
      icon: <FiUsers size={18}/>,
    },
    {
      name: 'Production',
      path : "p/dp/production",
      icon: <FiUsers size={18}/>,
    },
    {
      name: 'KPI',
      path : "p/dp/performance",
      icon: <FiUsers size={18}/>,
    },
    {
      name: 'Reporting',
      path : "p/dp/reporting",
      icon: <GiOilPump size={20}/>,
    },
    {
      name: 'Carte',
      path : "p/dp/carte",
      icon: <TbBuildingFactory size={18}/>,
    },  
  ]

  export const uniteLinks = [
    {
      name: 'Mouvements',
      path : "p/unite/mouvements",
      icon: <BsArrowLeftRight size={18}/>,
    },
    {
      name: 'Production',
      path : "p/unite/production",
      icon: <BiDroplet size={18}/>,
    },
    {
      name: 'Stockage',
      path : "p/unite/stock",
      icon: <FiUsers size={18}/>,
    },
    {
      name: 'Commentaires',
      path : "p/unite/commentaires",
      icon: <MdOutlineModeComment size={18}/>,
    },
  ]