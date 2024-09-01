import React,{useState,useContext} from 'react'
import contextApi from '../ContextApi/ContextApi'
function ShowContext() {
    const {data}=useContext(contextApi)
    if(!data) return <div className='my-2'>please login</div>
    else{
        return (
            <div className='my-2'>
              <div>UserName: {data.userName}</div>
              <div>Password : {data.password}</div>
            </div>
          )
    }
}

export default ShowContext
