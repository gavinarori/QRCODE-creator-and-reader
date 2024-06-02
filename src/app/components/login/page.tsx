const Login = ()=>{
    return(
        <div className="flex h-screen bg-indigo-700">
<div className="w-full max-w-xs m-auto bg-gray-200 rounded p-5">   
      <header>
        <img className="w-20 h-20 mx-auto mb-2" src="https://img.freepik.com/premium-photo/flat-color-bicycle-logo-vector_946471-2006.jpg?size=626&ext=jpg" />
        <h1 className="mb-5 text-indigo-500 text-center text-lg flex justify-center">DeKut Biycle Lock</h1>
      </header>   
      <form>
        <div>
          <label className="block mb-2 text-indigo-500">Username:</label>
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="text" />
        </div>
        <div>
          <label className="block mb-2 text-indigo-500">Registration No:</label>
          <input className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type="password"/>
        </div>
        <div>          
          <button className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"> Login</button>
        </div>       
      </form>    
    </div>
</div>
    )
}

export default Login;