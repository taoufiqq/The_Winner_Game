import React, { useState } from 'react';
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import './login.css';
import toastr from 'toastr';
import "toastr/build/toastr.css";

const Login = () => {
   const history = useHistory();
	const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {userName,password};

	axios.post(`http://localhost:3030/user/login`, user)
		.then(res => {
			console.log(res)
			if(!res.data.message){ 
			 let token= res.data.token;
			 localStorage.setItem("token", token);
			 history.push('/quiz');
			 toastr.info('User is authenticated SuccessFully', `Welcome ${user.userName}`, {
				positionClass: "toast-top-left",
			})

			}else{
				toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !', {
                    positionClass: "toast-top-left",
                })
			}
		 
		})
	}
  return(
<div className="wrapper">
	<div className="container">
		<h1>Welcome</h1>
		
		<form className="form"  onSubmit={handleSubmit}>

			<input type="text" required 
			  onChange={e => setUserName(e.target.value)}
			   placeholder="Username"/>

			<input type="password" required 
			value={password} 
			onChange={e => setPassword(e.target.value)}
			 placeholder="Password"/>


			<button type="submit" id="login-button">Login</button>
			<br></br><br></br>
			<Link to="/register">You don't have an acount ? Register now</Link>
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