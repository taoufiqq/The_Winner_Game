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
import Play from '../Home/Play';
import Winner from '../Home/Winner';
import PrivateRoute from '../auth/PrivateRoute';
function Routes() {

  return (



<BrowserRouter>
      <Switch> 
          <Route  path="/" exact component={Home}/> 
          <PrivateRoute  path="/quiz" exact component={Quiz}/> 
          <Route  path="/login" axact component={Login}/>
          <Route  path="/register" axact component={Register}/>
          <PrivateRoute  path="/categories" exact component={Categories}/>
          <PrivateRoute  path="/questions" exact component={Question}/>
          <PrivateRoute  path="/addCategory" exact component={AddCategory}/>
          <PrivateRoute  path="/editCategory" exact component={EditCategory}/>
          <PrivateRoute  path="/addQuestion" exact component={AddQuestion}/>
          <PrivateRoute  path="/editQuestion" exact component={EditQuestion}/>
          <Route  path="/admin" exact component={AdminLogin}/>
          <PrivateRoute  path="/play" exact component={Play}/>
          <PrivateRoute  path="/winner" exact component={Winner}/>
      </Switch>
</BrowserRouter>


      


  );
}

export default Routes;