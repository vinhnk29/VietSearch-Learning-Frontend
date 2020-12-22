import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Home} from "./components/pages/Home";
import {About} from "./components/pages/About";
import {Contact} from "./components/pages/Contact";
import {Users} from "./components/pages/Users";
import {Navbar} from "./components/layouts/Navbar";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/users" component={Users}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
