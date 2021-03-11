import React,{useState,useEffect} from 'react';
import { Link,useHistory } from 'react-router-dom';
import './home.css';

import gameOver from '../Dashboard/image/GameOver.png'




const Loser = () => {
const history = useHistory();
    let Score = localStorage.getItem('score');



    const logOut =()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('score')
           history.push('/');
        }
    const TryAgain =()=>{     
            localStorage.removeItem('score')
               history.push('/quiz');
            }
                 

return(

    <div id="home">
        <form>
            <Link  onClick={logOut} className="play-button" style={{marginLeft: '1600px',marginTop: '22px'}}>log out</Link>
        </form>  
            <section id="section">
                {/* <div style={{textAlign: 'center'}}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>  */}

               <h2> <img src={gameOver} /></h2>
               <h3 style={{marginTop: '-100px',fontSize:'24px'}}>Good Luck Next Time</h3>
                <h2>Your Score is : <strong>{Score}</strong></h2>

                <form>
                    <Link onClick={TryAgain}  className="play-button" style={{marginLeft: '34%',marginTop: '7%'}}>Try Again</Link>
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

export default Loser;