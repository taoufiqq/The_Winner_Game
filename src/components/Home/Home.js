import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';






const Home = () => (


    <div id="home">

            <section id="section">
                <div style={{textAlign: 'center'}}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                    <h2>You are <strong>The Winner</strong></h2>
                <form>
                    <Link to="/register" className="play-button" style={{marginLeft: '34%',marginTop: '25%'}}>Start</Link>
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


export default Home;