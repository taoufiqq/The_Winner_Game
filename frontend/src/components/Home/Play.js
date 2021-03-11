import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom'


const Play = () => {
    const [question , setQuestion] = useState(null);
    const [questionNum , setQuestionNum] = useState(1);
    const [score , setScore] = useState(0);
    const [numTry , setNumTry] = useState(3);
    const [numFalseQuestion , setNumFalseQuestion ] = useState(0);
    // const [questionEnd , setQuestionEnd] = useState(false);
    const history = useHistory();


    let handleClick = (answer,idQuestion)=>{
        
        let questionCount = questionNum
        let idCategory = localStorage.getItem('idCategory');

        if (numTry >= 1) {
            
            // check if the anwser is correct
            
            axios.get(`http://localhost:3030/question/oneQuestion/${idQuestion}`)
            .then(function (response) {

                if (response.data.correctAnswer == answer) {

                    let oldScore = score;
                    setScore(oldScore + 10);     
                } else {

                   let falseQuestion = numFalseQuestion;
                   setNumFalseQuestion(falseQuestion +1)
                 
                    
                }

                if (questionCount <= 10) {
                    // get question from db 

                    axios.get(`http://localhost:3030/question/${idCategory}`)
                        .then(function (response) {
                            setQuestion(response.data)
                            setQuestionNum( questionCount + 1) 
                    
                            }).catch(function (err) {
                                console.log(err);
                            });

                
                } else {

                    if (numFalseQuestion >= 3) {
                        
                        let oldNumTry = numTry;
                        setNumTry(oldNumTry - 1)
                        setNumFalseQuestion(0);
                        setQuestionNum(0)
                        setScore(0);
                        
                    }else{
                        localStorage.setItem('score',score);
                        history.push('/winner');
                        
                    }
                   
                }

            })



            
        } else {
            localStorage.setItem('score',score);
            history.push('/lose');
          
            
        }


    
        
        // console.log('--------------------------------------------------------');

        // console.log(score);

        // console.log('--------------------------------------------------------');

        // console.log(numFalseQuestion);
        // console.log('--------------------------------------------------------');

        // console.log(numTry);
        // console.log('--------------------------------------------------------');

    }





        useEffect(()=>{
            let idCategory = localStorage.getItem('idCategory');
                // console.log(numQuestion);

                axios.get(`http://localhost:3030/question/${idCategory}`)
                .then(function (response) {
        
        
          
                
                 
                    setQuestion(response.data)
                  
                    
                
                }).catch(function (err) {
                  console.log(err);
              });
              
              },[])
              const logOut =()=>{

                localStorage.removeItem('token')
                   history.push('/');
                }
             const handleFiftyFifty =()=>{
                 alert("Fifty Fifty Clicked !!!!")
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
                         <h2>Game Started</h2>
                         <div className="questions">
                         <div className="lifeline-conatiner">
                         <p className="p-left">
                             {/* <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span> */}
                             <button className="lifeline btn1" onClick={handleFiftyFifty}>50/50</button>
                         </p>
                         <p className="p-right">
                             {/* <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon"></span> */}
                             <span className="lifeline">Attempts Remaining : {numTry}</span>
                         </p>
                     </div>
                         <div className="counte-question">


                           <p>
                             <span className="left" >Question {questionNum} /11</span>
                           </p>
                           <p>
                             <span className="left" >Score {score}</span>
                           </p>
                         </div>


                         <h5>{ question && question.question}</h5>
                    
                             <div className="options-conatiner">
                               <Link className="option" onClick={()=>{ handleClick(question.correctAnswer,question._id) }}>{ question && question.correctAnswer}</Link>
                                 <Link className="option" onClick={()=>{ handleClick(question.incorrectAnswer1,question._id) }}>{ question && question.incorrectAnswer1}</Link>
                             </div>
                             <div className="options-conatiner1">
                                 <Link className="option" onClick={()=>{ handleClick(question.incorrectAnswer2,question._id) }} >{ question && question.incorrectAnswer2}</Link>
                                 <Link className="option" onClick={()=>{ handleClick(question.incorrectAnswer3,question._id) }} >{ question && question.incorrectAnswer3}</Link>
                             </div>

                          </div>
                       
                       
             
                  </section>
               
       
     
         </div>
         
        
        );
    
}

export default Play;