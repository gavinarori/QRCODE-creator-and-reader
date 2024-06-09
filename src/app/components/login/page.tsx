'use client'

import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"


const Login = ()=>{
const sesesion = useSession()
const router = useRouter()
const [data, setData] = useState({
  email: "",
  password: ""
})

useEffect(() =>{
if (sesesion.status === "authenticated"){
  router.push('/')
}
})

const userLogin = async(e:string | any) =>{
  e.preventDefault()
  signIn('credentials',{...data ,redirect: false}).then((submitted) => {
    if (submitted?.error) {
        toast.error(submitted.error)
    }

    if(submitted?.ok && !submitted?.error) {
        toast.success('Logged in successfully!')
    }})
}
  
    return(
        <div className="flex h-screen bg-indigo-700">
<div className="w-full max-w-xs m-auto bg-gray-200 rounded p-5">   
      <header>
        <img className="w-20 h-20 mx-auto mb-2" src="https://img.freepik.com/premium-photo/flat-color-bicycle-logo-vector_946471-2006.jpg?size=626&ext=jpg" />
        <h1 className="mb-5 text-indigo-500 text-center text-lg flex justify-center">DeKut Biycle Lock</h1>
      </header>   
      <form onSubmit ={userLogin}>
        <div>
          <label className="block mb-2 text-indigo-500">Email:</label>
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"  id="email"name="email" type="email" autoComplete="email" value ={data.email} onChange={e => setData({ ...data, email: e.target.value })} required />
        </div>
        <div>
          <label className="block mb-2 text-indigo-500">Registration No:</label>
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password" value={data.password} onChange ={e => setData({...data, password: e.target.value})} required />
        </div>
        <div>          
          <button type="submit" className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"> Login</button>
        </div>       
      </form>    
    </div>
</div>
    )
}

export default Login;