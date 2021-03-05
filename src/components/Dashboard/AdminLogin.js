import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import '../Login/login.css';


const Login = (props) => {

	const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {userName,password};

	axios.post(`http://localhost:3030/user/login`, user)
		.then(res => {
		    if(res.error){
				return false
			}else{
				console.log(res.data.token);

				let token = res.data.token;
		
			
		  
				localStorage.setItem("token", token);
				 console.log(res.data);
	             props.history.push('/categories')
			}
		 
		})
	}
  return(
<div className="wrapper">
	<div className="container">
		<h1>Admin Login</h1>
		
		<form className="form"  onSubmit={handleSubmit}>

			<input type="text" required data-parsley-no-focus
			 value={userName}
			  onChange={e => setUserName(e.target.value)}
			   placeholder="Username"/>

			<input type="password" required data-parsley-no-focus
			value={password} 
			onChange={e => setPassword(e.target.value)}
			 placeholder="Password"/>


			<button type="submit" id="login-button">Login</button>
			<br></br><br></br>
			<Link to="/register">don't have an acount ? Register now</Link>
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
export default Login;