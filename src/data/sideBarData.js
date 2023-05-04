import { FiUsers} from 'react-icons/fi'
import { BsArrowLeftRight, BsPinMap } from 'react-icons/bs'
import { GiOilPump} from 'react-icons/gi'
import { TbBuildingFactory, TbReportAnalytics, TbBrandProducthunt} from 'react-icons/tb'
import { MdOutlineModeComment, MdOutlineDashboard } from 'react-icons/md'
import { CgPerformance } from 'react-icons/cg'
import { GoGraph } from 'react-icons/go'
import { RiWaterFlashLine } from 'react-icons/ri'




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
      icon: <MdOutlineDashboard size={18}/>,
    },
    {
      name: 'Production',
      path : "p/dp/production",
      icon: <GiOilPump size={18}/>,
    },
    {
      name: 'KPI',
      path : "p/dp/performance",
      icon: <CgPerformance size={18}/>,
    },
    {
      name: 'Reporting',
      path : "p/dp/reporting",
      icon: <TbReportAnalytics size={20}/>,
    },
    {
      name: 'Carte',
      path : "p/dp/carte",
      icon: <BsPinMap size={18}/>,
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
      icon: <RiWaterFlashLine size={18}/>,
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

  export const EPLinks = [
    {
      name: 'Puits',
      path : "p/ep/puits",
      icon: <GiOilPump size={18}/>,
    },
    {
      name: 'Production',
      path : "p/ep/production",
      icon: <RiWaterFlashLine size={18}/>,
    },
    {
      name: 'Perimetres',
      path : "p/ep/perimetres",
      icon: <TbBrandProducthunt size={18}/>,
    },
    {
      name: 'Config. Puits',
      path : "p/ep/config",
      icon: <TbBrandProducthunt size={18}/>,
    }
  ]

  export const XPLinks = [
    {
      name: 'Produciton',
      path : "p/xp/production",
      icon: <RiWaterFlashLine size={18}/>,
    },
    {
      name: 'Unites',
      path : "p/xp/unites",
      icon: <TbBuildingFactory size={18}/>,
    },
    {
      name: 'Perimetres',
      path : "p/xp/perimetres",
      icon: <TbBrandProducthunt size={18}/>, 
    },
    {
      name: 'Previsions',
      path : "p/xp/previsions",
      icon: <GoGraph size={18}/>,
    }
  ]