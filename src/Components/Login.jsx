import React,{useState,useContext} from 'react'
import contextApi from '../ContextApi/ContextApi'

function Login() {
    const {setData} = useContext(contextApi)
    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const submit= (e)=>{
        e.preventDefault()
        setData({userName,password})
    }
  return (
    <div className='my-3 flex justify-center'>
      <div>
        <div className='my-2'><input type="text" name="" id="" placeholder='Enter your name' value={userName} onChange={(e)=>setUserName(e.target.value)} className='max-w-sm p-3 rounded-lg'/></div>
        <div className='my-2'><input type="password" name="" id="" placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='max-w-sm p-3 rounded-lg'/></div>
        <div className='my-2'><input type="submit" name="" id=""  value="Submit" onClick={submit} className='bg-orange-500 rounded-md p-1' /></div>
      </div>
    </div>
  )
}

export default Login
