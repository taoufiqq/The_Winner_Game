import React, { useState,useEffect} from 'react';
import { Link,useHistory } from "react-router-dom";
import Select from 'react-select';
import axios from 'axios';

import './dashboard.css';
import logo from '../Dashboard/image/winner.jpg'




function EditQuestion() {

  const history = useHistory();

	const [question, setQuestion] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [incorrectAnswers, setIncorrectAnswers] = useState();

  const [categories, setNameCategories] = useState(null);

  const idQts=localStorage.getItem('idQuestion');

// ---------------------get question to update-----------------------------
   useEffect(()=>{

    axios.get(`http://localhost:3030/question/${idQts}`)
    .then(function (response) {
     
      setQuestion(response.data.question)
      setCorrectAnswer(response.data.correctAnswer)
      setIncorrectAnswers(response.data.incorrectAnswers)

    
    }).catch(function (err) {
      console.log(err);
  });
  
  },[])
// -----------------------update question---------------------------
	const handleSubmit = (e) => {
		e.preventDefault();

    const data = {question,correctAnswer,incorrectAnswers};

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
        
      setNameCategories(response.data)
    
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
       
          <input className="floatlabel" id="name" type="text" placeholder="Incorrect Answer" required 
            value={incorrectAnswers}
            onChange={e => setIncorrectAnswers(e.target.value)} />
       
    
       <select id="select">
             {categories && categories.map(item =>(
                <option  value={item._id}
                onChange={e => setNameCategories(e.target.value)}>{item.nameCategory}</option>
              ))}          
          </select>  
        <button type="submit" id="AddCatg">Add Question</button>
        
      </form>
</div>

  )
}
export default EditQuestion;