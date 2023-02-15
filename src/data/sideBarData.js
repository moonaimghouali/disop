import { FiUsers} from 'react-icons/fi'
import {GiOilRig, GiOilPump} from 'react-icons/gi'
import { TbBuildingFactory} from 'react-icons/tb'

export const Adminlinks = [
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