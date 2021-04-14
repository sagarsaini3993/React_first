import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {createComponent} from "./components/CreateComponent";
import {IndexComponent} from "./components/IndexComponent";
import {EditComponents} from "./components/EditComponents";
import {NameList} from "./components/NameList";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ItemArray : [{
        name:'Rahul',phone:'1212',city:'Toronto',email:'rahul@gmail.com', image:'1.jpg'
      }]
    }
    render(){
      return(
        <Router>
          <div className = "container">
            <nav className = "navbar navbar-expand"
          </div>
        </Router>
      )
    }
  }
  
}

App.defaultProps={
  headerProp:"Hello header"
}

    export default App;
