import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import '../Home/home.css';






const Admin = () => {
    const history = useHistory();
    const logOut =()=>{

        localStorage.removeItem('token')
           history.push('/admin');
        }
        
    return(
    <div id="home">

            <section id="section">
                <div style={{textAlign: 'center'}}>
                    <span className="mdi mdi-cube-outline cube"></span>
              
                </div>
                    <h2>Admin</h2>
                <form>
                    <Link  onClick={logOut} className="play-button">Admin</Link>
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
export default Admin;