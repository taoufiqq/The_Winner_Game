import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './home.css';






const Winner = () => {

    let Score = localStorage.getItem('score');
    const [message , setMessage] = useState("");

    if(Score==100){

        setMessage("you won the 1st place")
    }else if(Score==90) {
        setMessage("you won the second place")
    }else if(Score==80) {
        setMessage("you won the third place")
    }

  

return(

    <div id="home">

            <section id="section">
                <div style={{textAlign: 'center'}}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>  

                <h2>Your Score is : <strong>{Score}</strong></h2>

                <h2><strong>Congratulation </strong>{message}</h2>

                <form>
                    <Link to="/" className="play-button" style={{marginLeft: '34%',marginTop: '25%'}}>receive your Gift</Link>
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