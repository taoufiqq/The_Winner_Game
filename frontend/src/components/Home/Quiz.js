import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';


// import './home.css';


const Quiz = () => {


  const history = useHistory();
  const [categories , setCategories] = useState(null);

  useEffect(()=>{
  
    axios.get(`http://localhost:3030/category`)
      .then(function (response) {
       
     
        setCategories(response.data)
      
      }).catch(function (err) {
        console.log(err);
    });
    
    })

let handleClick =(id)=>{

  localStorage.setItem('idCategory',id);

  history.push('/play');




}

    const logOut =()=>{

      localStorage.removeItem('token')
         history.push('/');
      }
      

  return(
    <div id="home">
       <form>
       <Link  onClick={logOut} className="play-button" style={{marginLeft: '1600px',marginTop: '22px'}}>log out</Link>
        </form>           
   
            <section id="section">
                <div style={{textAlign: 'center'}}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                    <h2>Welcome </h2>

                     <h3>Choice Category to Start Game</h3>
         
                    <form>
          
                 
                    { categories && categories.map(item =>(
                      <div className="card-body">
                                        
                        <Link className="play-button" onClick={()=>{ handleClick(item._id)}}>{item.nameCategory}</Link>
                      {/* <Link to="/play" className="play-button">{item.nameCategory}</Link> */}
                      </div>
                        ))} 
              
        
                  
                   </form>
                  
        
             </section>
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


    );
  }

export default Quiz;