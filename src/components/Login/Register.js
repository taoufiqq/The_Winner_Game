import React, { useState } from 'react';
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import './login.css';


const Register = () => {

 const history = useHistory();

	const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
	const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {firstName,lastName,userName,email,password};

	axios.post(`http://localhost:3030/user/authentication`, user)
		.then(res => {
		    if(res.error){
				return false
			}else{
				
				 console.log(res.data);
	             history.push('/login')
			}
		 
		})
	}
  return(
<div className="wrapper">
	<div className="container">
		<h1>Welcome</h1>
		
		<form className="form"  onSubmit={handleSubmit}>

        <input type="text" required data-parsley-no-focus
			 value={firstName}
			  onChange={e => setFirstName(e.target.value)}
			   placeholder="firstName"/>

        <input type="text" required data-parsley-no-focus
			 value={lastName}
			  onChange={e => setLastName(e.target.value)}
			   placeholder="lastName"/>

		<input type="text" required data-parsley-no-focus
			 value={userName}
			  onChange={e => setUserName(e.target.value)}
			   placeholder="Username"/>

       	<input type="email" required data-parsley-no-focus
			 value={email}
			  onChange={e => setEmail(e.target.value)}
			   placeholder="Email"/>

		<input type="password" required data-parsley-no-focus
			value={password} 
			onChange={e => setPassword(e.target.value)}
			 placeholder="Password"/>


			<button type="submit" id="login-button">Register</button>
			<br></br><br></br>
			<Link to="/login">you have already an acount</Link>
		</form>
	</div>
	
	<ul className="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>
  )
}
export default Register;