import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import './home.css';

import congratulation from '../Dashboard/image/congratulation.png'




const Winner = () => {
const history = useHistory();

    let Score = localStorage.getItem('score');
    let message="";



    if(Score==100){
        message=<h4>you won the 1st place</h4>
    }else if(Score==90) {
        message=<h4>you won the 2nd place</h4>

    }else if(Score==80) {
        message=<h4>you won the 3rd place</h4>
   
    }


    const logOut =()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('score')
           history.push('/');
        }
         

return(

    <div id="home">
        {/* <video src={congratulation} autoPlay loop muted /> */}
        <form>
            <Link  onClick={logOut} className="play-button" style={{marginLeft: '1600px'}}>log out</Link>
        </form>  
            <section id="section">
       

               <h2> <img src={congratulation} /></h2>
               <h2>Congratulation</h2>
               <p className="message">{message}</p>
          
                <h2>Your Score is : <strong>{Score}</strong></h2>

               
                <form>
                    <Link to="/" className="play-button" style={{marginLeft: '34%',marginTop: '7%'}}>receive your Gift</Link>
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

export default Winner;