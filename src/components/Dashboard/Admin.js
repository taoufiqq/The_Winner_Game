import React from 'react';
import { Link } from 'react-router-dom';
import '../Home/home.css';






const Admin = () => (


    <div id="home">

            <section id="section">
                <div style={{textAlign: 'center'}}>
                    <span className="mdi mdi-cube-outline cube"></span>
              
                </div>
                    <h2>Admin</h2>
                <form>
                    <Link to="/adminLogin" className="play-button">Admin</Link>
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


export default Admin;