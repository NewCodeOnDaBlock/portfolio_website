import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainBody from './components/MainBody';
import LogoNav from './components/LogoNav';
import Footer from './components/Footer';
// import FillOutForm from './components/FillOutForm';


function App() {
  return (
    <BrowserRouter>
      <Link to="/"></Link>
      <Switch>
        <Route path="/">
          <LogoNav />
          <MainBody />
          <Footer props={MainBody} />
          {/* <FillOutForm /> */}
        </Route>



      </Switch>





    </BrowserRouter>
    
  );
  
}

export default App;
