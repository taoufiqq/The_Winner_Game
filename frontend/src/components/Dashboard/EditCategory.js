import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import './dashboard.css';
import logo from '../Dashboard/image/winner.jpg'




const EditCategory =(props) => {


  const [nameCategory, setNameCategory] = useState(null);
   const idCatg=localStorage.getItem('idCategory');

   useEffect(()=>{

    axios.get(`http://localhost:3030/category/${idCatg}`)
    .then(function (response) {
     
      
      setNameCategory(response.data.nameCategory)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  },[])






	const handleSubmit = (e) => {
		e.preventDefault();

    const category = {nameCategory};

    axios.put(`http://localhost:3030/category/update/${idCatg}`,category)
            
  
    
      .then(res => {
          if(res.error){
          return false
        }else{
          
           console.log(res.data);
           props.history.push('/categories')
        }
       
      })

  }


  return(
    
    <div  className="container-xl">

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
 


  <form id="form"  onSubmit={handleSubmit}>
    
        <h1>Edit Category</h1>
      
           <input type="text" 
           value={nameCategory}
           onChange={(e) => setNameCategory(e.target.value)} />
       
   
          <button type="submit" id="AddCatg">Edit Category</button>
 
      </form>
</div>

  )
}
export default EditCategory;