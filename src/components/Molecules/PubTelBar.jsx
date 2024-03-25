import React from 'react'
import { pubAtoms } from "../Atoms";


const data = [
    {
        tel: '+237 58 69 87 54',
        text: 'Tel',        
    },
    {
        tel: '+237 78 69 77 54',
        text: 'Support',        
    },

]

export function PubTelBar() {
  return (
    <div className='d-flex p-2 gap-0 column-gap-3 '>
          {
              data.map((telLink) => 
                  <pubAtoms.PubTelLink tel={telLink.tel} text={telLink.text}/>
                   
              )
      }
          
    </div>
  )
}