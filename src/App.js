import React from "react";
import "../src/App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import OrderPage from "./pages/OrderPage";
import CheckedPage from './pages/CheckedPage'
import PaidPage from './pages/PaidPage'
import PaymentPage from './pages/PaymentPage'
import LoginPage from './pages/LoginPage'
import Register1 from './pages/Register1Page'
import Signup from './pages/SignupPage'
import ChatPage from './pages/ChatPage'
import SetingsPage from "./pages/SetingsPage";
import Chat2Page from "./pages/Chat2Page";
import OrderNoPage from "./pages/OrderNoPage";


function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/portfolio' component={PortfolioPage}/>
      <Route path='/order' component={OrderPage}/>
      <Route path='/paid' component={PaidPage}/>
      <Route path='/payment' component={PaymentPage}/>
      <Route path='/login' component={LoginPage}/>
      <Route path='/checked' component={CheckedPage}/>
      <Route path='/register' component={Register1}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/chat' component={ChatPage}/>
      <Route path='/settings' component={SetingsPage}/>
      <Route path='/chat2' component={Chat2Page}/>
      <Route path='/NoOrder' component={OrderNoPage}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
