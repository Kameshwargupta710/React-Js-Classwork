import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Home from './home';
import Login from './login';
import Projects from './Components/projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import $ from 'jquery';
import Todos from './Components/Todos';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';



class App extends Component {

  constructor() {
    super();
    console.log("executed");
    this.state = {
      projects: []
    }
  }


  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      //crossDomin:true,
      //type:'GET',
      dataType: 'jsonp',
      cache: false,
      success: function (data) {
        this.setState({ todos: data }, function () {
          console.log(this.state);
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.getTodos();
  }

  componentWillMount() {
    console.log("ComponentWillMount executed");
    this.setState({
      projects: [{
        id:uuid.v4(),
        title:'Business',
        category:'Web Design',
        manager:'BiJoyan',
        details: [{
            duration: "2 years",
            budget: "2000"
          },
          {
            duration: "2 years",
            budget: "2000"
          }]
      },
        {
         id:uuid.v4(),
          title: 'Business Website',
          category: 'Web Design',
          manager: 'Rahul',
          details: [{
            duration: "2 years",
            budget: "2000"
          },
          {
            duration: "2 years",
            budget: "2000"
          }]
        },
        {
          id:uuid.v4(),
          title: 'Ecommerce',
          category: 'Web Design',
          manager: 'Ram',
          details: [{
            duration: "2 years",
            budget: "2000"
          },
          {
            duration: "2 years",
            budget: "2000"
          }]
        },
        {
          id:uuid.v4(),
          title: 'Sports Website',
          category: 'Web Design',
          manager: 'Rajesh',
          details: [{
            duration: "2 years",
            budget: "2000"
          },
          {
            duration: "2 years",
            budget: "2000"
          }]
        },
        {
          id:uuid.v4(),
          title: 'Banking Website',
          category: 'Web Design',
          manager: 'Ramesh',
          details: [{
            duration: "2 years",
            budget: "2000"
          },
          {
            duration: "2 years",
            budget: "2000"
          }]
        }]
    });
  }

  handleAddProject(newProj) {
    let proj = this.state.projects;
    proj.push(newProj);
    //alert(newProj);
    this.setState(proj)
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(obj => obj.id === id)
    projects.splice(index, 1);
    this.setState({ projects: projects });
  }


  render() {

    //var PropTypes = require('prop-types');
    var mystyle = {
      color: 'white',

    }
    var mystyle1 = {
      bgcolor: 'Red'
    }

    return (
      <Router>
        <div class="main">
          <div class="container">
            <div class="panel panel-primary">
              <span class="panel-heading">
                <h3 class="panel-title" class="bg-info text-white" style={mystyle} >Welcome to Shopping Cart</h3>
              </span>
              <div class="btn-group btn-group-mg">
                <button type="button" class="btn btn-info"><Link to={'/'} style={mystyle}>Home</Link></button>
                <button type="button" class="btn btn-info"><Link to={'/login'} style={mystyle}>Login</Link></button>
                <button type="button" class="btn btn-info"><Link to={'/products'} style={mystyle}>Products</Link></button>
              </div>
            </div>
            <switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
            </switch>
            <hr />
            <AddProject addProject={this.handleAddProject.bind(this)} />
            <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
            <hr />
            <Todos todos={this.state.todos}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
