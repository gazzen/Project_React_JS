import React,{useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  //get data from controller/auth.js
  const[inputs, setInputs] = useState({
    username:'',
    email:'',
    password:'',
  })

  //to check #try & catch error
  const [err,setError] = useState(null);

//after registration move to LOGIN
  const navigate = useNavigate();

  const handleChange = e =>{
    setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
  }
//to check whether name, email entered is printed or not
  //console.log(inputs)

//asyn=doing API request so/preventdDefault=to avoid auto Refresh
  const handleSubmit = async e=>{
    e.preventDefault()
    try{
      //npm add axios library
      //and ADD PORT no. 3000 in package.json rather writing in POST again and again
      //const res = await axios.post('auth/register', inputs)
      //console.log(res)
      await axios.post('auth/register', inputs)
      //Once Logged In Move to LOGIN
      navigate('/login')

    }catch(err){
      //console.log(err)
      //define at above as err,setError 
      setError(err.response.data);
    }

    
  }


  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="email" placeholder='email' name='email' onChange={handleChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        
        {err && <p>{err}</p>}
        <span>Don't you have an account?<Link to='/login'>Login</Link></span>
      </form>


    </div>
  )
}


export default Register;
