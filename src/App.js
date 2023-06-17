
import './App.css';
import { useState } from 'react';

function App() {
  let [name,setName]=useState("");
  let [email,setEmail] = useState("");
  let [password,setPassword] = useState("");
  let [confirmPassword,setConfirmPassword] = useState("");
  let [error,setError] = useState("");
  let [success,setSuccess] = useState("");

  let validation=()=>{
    if(name===""||email===""||password===""||confirmPassword===""){
      setError("Error : All the fields are mandatory");
      return;
    }
    else if(password!==confirmPassword){
      setError("Password doesn't match!");
      return;
    }
    else{
      setError('');
      setSuccess("Successfully Signed Up!");
    }
    console.log("Successfully Signed Up!");
    setTimeout(function() {
      window.location.reload();
    }, 1000);
  }
  return(
    <div className="signup-form">
    <div className='heading'>Signup</div>
    <div className="input-field">
      <input type='text' id='name' placeholder='Full Name' onChange={(e)=>setName(e.target.value)}></input>
      <input type='email' id='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input>
      <input type='password' id='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}></input>
      <input type='password' id='confirm-password' placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)}></input>
    </div>
    {error && <div className='error'>{error}</div>}
    {success && <div className='success'>{success}</div>}
    <button onClick={validation}>Signup</button>
  </div>
  );
}

export default App;