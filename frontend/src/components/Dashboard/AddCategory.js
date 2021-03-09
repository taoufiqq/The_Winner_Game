import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

import axios from 'axios';

import './dashboard.css';
import logo from '../Dashboard/image/winner.jpg'




function AddCategory() {

const history=useHistory();

	const [nameCategory, setNameCategory] = useState();


	const handleSubmit = (e) => {
		e.preventDefault();

	const category = {nameCategory};

	axios.post(`http://localhost:3030/category/add`,category)
          

  
		.then(res => {
		    if(res.error){
				return false
			}else{
				
				 console.log(res.data);
         history.push('/categories')
			}
		 
		})
	}

  return(
    
    <div className="container-xl">

  <nav className="menu" tabIndex={0}>
    <div className="smartphone-menu-trigger" />
    <header className="avatar">
    <img src={logo} />
      <h2>Admin</h2>

    </header>


    <ul>
      
    <Link to="/categories"><span>Category</span></Link>
  <br></br><br></br>
        <Link to="/questions"><span>Question</span></Link>
  <br></br><br></br>
        <Link to="/admin" ><span>log out</span></Link>
 
    </ul>
  </nav>
 
  {/* Add Form HTML */}

  <form id="form" data-parsley-validate onSubmit={handleSubmit}>
    
        <h1>Add New Category</h1>
        <fieldset>
          <input className="floatlabel" type="text" placeholder="Name Category"
                value={nameCategory}
                onChange={e => setNameCategory(e.target.value)} 
          required/>
        </fieldset>
        <fieldset>
        <button type="submit" id="AddCatg">Add Category</button>
        </fieldset>
      </form>
</div>

  )
}
export default AddCategory;