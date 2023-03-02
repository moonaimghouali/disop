import React from 'react'
import BacDetail from './BacDetail'

const BacsGroup = ({onSpec}) => {
  var style = "-rotate-90 whitespace-nowrap text-xl font-semibold";
  var style2 = onSpec? (style+= " text-green-600") : (style+= " text-red-600")

  return (
    <div className='h-full w-full flex flex-cols '>
          <div className='h-full w-16 bg-white shadow-sm border-r-1 border-gray-200 flex justify-center items-center mr-4'>
            <span className={style2}>Bacs {onSpec ? ("On") : ("Off")}-Spec </span>
          </div>

            {/* bacs de stockage */}
          <div className='flex flex-row flex-wrap h-full w-full gap-4 py-2 overflow-y-auto whitespace-nowrap '>
            <BacDetail categorie_bac={"flottant"} capacite_stockage={124324.09} stockage_actuel={100213.89}/>
            {onSpec && <BacDetail categorie_bac={"flottant"} capacite_stockage={124324.09} stockage_actuel={100213.89}/> }
            {onSpec && <BacDetail categorie_bac={"flottant"} capacite_stockage={124324.09} stockage_actuel={100213.89}/> }
            {onSpec && <BacDetail categorie_bac={"flottant"} capacite_stockage={124324.09} stockage_actuel={100213.89}/> }
          </div>
        </div>
  )
}

export default BacsGroup