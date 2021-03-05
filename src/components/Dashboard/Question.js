import {useEffect, useState} from 'react';
import './dashboard.css';
import logo from '../Dashboard/image/winner.jpg'
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';



function Question() {
  
  const history = useHistory();
//----------- show gategory added in datatable------------
const [questions , setQuestions] = useState(null);

useEffect(()=>{

  axios.get(`http://localhost:3030/question`)
    .then(function (response) {
     
      console.log(response.data);
      setQuestions(response.data)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  })
// ---------------Delete Question-------------------

const deleteQuestion = (id)=>{
  axios.delete(`http://localhost:3030/question/delete/${id}`)
  .then(function (response) {
    console.log('item was deleted Succesfully ... ');
  
  })
  

}
const getIdQuestion = (id)=>{
  localStorage.setItem('idQuestion',id);
  history.push('/editQuestion');

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
  <div className="container-xl">

    <div className="table-responsive" style={{width: '120%'}}>
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-6">
              <h2>Manage <strong>Question</strong></h2>
            </div>
            <div className="col-sm-6">
            <Link to="/addQuestion" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Question</span></Link>              
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
              <th>Incorrect Answers 1</th>
              <th>Incorrect Answers 2</th>
              <th>Incorrect Answers 3</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          { questions && questions.map(item =>(
           
          <tbody id="row">
          <td>{item.question}</td>
          <td>{item.correctAnswer}</td>
          <td>{item.incorrectAnswer1}</td>
          <td>{item.incorrectAnswer2}</td>
          <td>{item.incorrectAnswer3}</td>
          <td>{item.nameCategory}</td>
          <td>		

             <Link  onClick={()=> getIdQuestion(item._id)} class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></Link>
             {/* <Link to="/editQuestion" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></Link> */}
             <Link onClick={() => deleteQuestion(item._id)} class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></Link>
        </td>
          </tbody>
               ))}
        </table>

      </div>
    </div>
  </div>
  
</div>




  )
}
export default Question;