import React, { useState,useEffect} from 'react';
import { Link,useHistory } from "react-router-dom";
import Select from 'react-select';
import axios from 'axios';

import './dashboard.css';
import logo from '../Dashboard/image/winner.jpg'




function EditQuestion() {

  const history = useHistory();

  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const [incorrectAnswer3, setIncorrectAnswer3] = useState("");
  const [nameCategory, setNameCategory] = useState();

  const idQts=localStorage.getItem('idQuestion');

// ---------------------get question to update-----------------------------
   useEffect(()=>{

    axios.get(`http://localhost:3030/question/update/${idQts}`)
    .then(function (response) {
     
      setQuestion(response.data.question)
      setCorrectAnswer(response.data.correctAnswer)
      setIncorrectAnswer1(response.data.incorrectAnswer1)
      setIncorrectAnswer2(response.data.incorrectAnswer2)
      setIncorrectAnswer3(response.data.incorrectAnswer3)
      setIncorrectAnswer1(response.data.incorrectAnswer1)

    
    }).catch(function (err) {
      console.log(err);
  });
  
  },[])
// -----------------------update question---------------------------
	const handleSubmit = (e) => {
		e.preventDefault();

    const data = {question,correctAnswer,incorrectAnswer1,incorrectAnswer2,incorrectAnswer3};

    axios.put(`http://localhost:3030/question/update/${idQts}`,data)
      .then(res => {
        if(res.error){
          return false
        }else{
          console.log(res.data);
          history.push('/questions')
        }
       
      })

  }
// get all category and show it in select
useEffect(()=>{

  axios.get(`http://localhost:3030/category`)
    .then(function (response) {
        
      setNameCategory(response.data)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  },[])






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

   <form id="form" data-parsley-validate onSubmit={handleSubmit}>
    
        <h1>Edit Question</h1>
  
        <input className="floatlabel" id="name" type="text" 
          placeholder="Question" required 
          value={question}
          onChange={e => setQuestion(e.target.value)} />
       
          <input className="floatlabel" id="name" type="text" placeholder="Correct Answer" required 
            value={correctAnswer}
            onChange={e => setCorrectAnswer(e.target.value)} />
       
          <input className="floatlabel" id="name" type="text" placeholder="Incorrect Answer 1" required 
            value={incorrectAnswer1}
            onChange={e => setIncorrectAnswer1(e.target.value)} />

             <input className="floatlabel" id="name" type="text" placeholder="Incorrect Answer 2" required 
            value={incorrectAnswer2}
            onChange={e => setIncorrectAnswer2(e.target.value)} />

             <input className="floatlabel" id="name" type="text" placeholder="Incorrect Answer 3" required 
            value={incorrectAnswer3}
            onChange={e => setIncorrectAnswer3(e.target.value)} />
       
    
       <select id="select">
             {nameCategory && nameCategory.map(item =>(
                <option  value={item._id}
                onChange={e => setNameCategory(e.target.value)}>{item.nameCategory}</option>
              ))}          
          </select>  
        <button type="submit" id="AddCatg">Edit Question</button>
        
      </form>
</div>

  )
}
export default EditQuestion;