import './App.css';
import Home from './Home'
import Work from './Work'
import { Route, Switch } from 'react-router-dom';
import About from './About'
import Discography from './Discography'
import Icons from './Icons'
import Videos from './Videos'
import Hamburger from './Hamburger'



function App() {
  return (
    <div className="App">
        {/* <NavBar></NavBar> */}
        <Hamburger></Hamburger>
        <Icons></Icons>
        
    <Switch>
        <Route
            exact
            path='/'
            component={Home}
            />
        <Route
            exact
            path='/work'
            component={Work}
            />
        <Route
            exact
            path='/about'
            component={About}
            />    
        <Route
            exact
            path='/discography'
            component={Discography}
            /> 
          <Route
            exact
            path='/videos'
            component={Videos}
            />       
        
    </Switch>

      
    </div>
  );
}

export default App;
