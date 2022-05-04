import React, {useState, useEffect} from 'react'

const ObjectData = ({clearObjectList, objectList, customKeyList}) => {

const selectedKeysCustom = customKeyList.map((item, index) => {
        return (
            <div>
            <li key={index}>{item}:</li>
            </div>
            
        )
      
    
    })

    const selectedKeys = objectList.map((item, index) => {
        return (
            <div>
            <li key={index}>{item}:</li>
            </div>
            
        )
      
    
    })

    
        return (
            <div id="object">
            <div className='btn-container'>
            <button id="btn-clear-object" onClick={clearObjectList}>Clear</button>
            </div>
            <div id="object-props">
            <ul>
            {selectedKeys}
            {selectedKeysCustom}
            </ul>
            
            </div>
           
            </div>
          
        )
    

  
   
  
}

export default ObjectData;