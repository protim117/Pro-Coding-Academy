import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/About Us/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFounds from './Components/NotFounds/NotFounds';
import Services from './Components/Services/Services';

function App() {
  return (
    // used full-body class for background color 
    <div className='container full-body'>
      {/* React-Router  */}
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/aboutus'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/services'>
           <Services></Services>
          </Route>
          <Route path='/contactus'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='*'>
            <NotFounds></NotFounds>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
