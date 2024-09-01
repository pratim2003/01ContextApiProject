import React from 'react'
import contextApi from './ContextApi'
import { useState } from 'react'
function ContextApiInfo({children}) {
    const [data,setData]=useState(null)
  return (
    <contextApi.Provider value={{data,setData}}>
        {children}
    </contextApi.Provider>
  )
}

export default ContextApiInfo
