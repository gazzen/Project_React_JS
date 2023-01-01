import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
 //same to same copy paste from Register
  //get data from controller/auth.js
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })

  //to check #try & catch error
  const [err, setError] = useState(null);

  //after registration move to LOGIN
  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  //to check whether name, email entered is printed or not
  //console.log(inputs)

  //asyn=doing API request so/preventdDefault=to avoid auto Refresh
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      //npm add axios library
      //and ADD PORT no. 3000 in package.json rather writing in POST again and again
      //const res = await axios.post('auth/register', inputs)
      //console.log(res)
      await axios.post('auth/login', inputs)
      //Once Logged In Move to HOME PAGE
      navigate('/')

    } catch (err) {
      //console.log(err)
      //define at above as err,setError 
      setError(err.response.data);
    }
  
  };  




  return (
    <div className='auth'>
      <h1>Login</h1>
        <form action="">
          <input type="text" placeholder='username' name='username'onChange={handleChange}/>
          <input type="password" placeholder='password' name='password' onChange={handleChange}/>
          <button onClick={handleSubmit}>Login</button>
          {err &&<p>{err}</p>}
          <span>Don't you have an account?<Link to='/register'>Register</Link></span>
        </form>

      
    </div>
  )
}

export default Login 
