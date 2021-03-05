import React, { useState } from 'react';
import { BrowserRouter , Route, Switch} from 'react-router-dom';

import './App.css';

import Home from '../Home/Home';
import Quiz from '../Home/Quiz';
import Login from '../Login/Login';
import Register from '../Login/Register';
import Categories from '../Dashboard/Categories';
import Question from '../Dashboard/Question';
import AddCategory from '../Dashboard/AddCategory';
import EditCategory from '../Dashboard/EditCategory';
import AddQuestion from '../Dashboard/AddQuestion';
import EditQuestion from '../Dashboard/EditQuestion';
import AdminLogin from '../Dashboard/AdminLogin';
function Routes() {

  return (



<BrowserRouter>
      <Switch> 
          <Route  path="/home" exact component={Home}/> 
          <Route  path="/quiz" exact component={Quiz}/> 
          <Route  path="/login" axact component={Login}/>
          <Route  path="/register" axact component={Register}/>
          <Route  path="/categories" exact component={Categories}/>
          <Route  path="/questions" exact component={Question}/>
          <Route  path="/addCategory" exact component={AddCategory}/>
          <Route  path="/editCategory" exact component={EditCategory}/>
          <Route  path="/addQuestion" exact component={AddQuestion}/>
          <Route  path="/editQuestion" exact component={EditQuestion}/>
          <Route  path="/admin" exact component={AdminLogin}/>
      </Switch>
</BrowserRouter>


      


  );
}

export default Routes;