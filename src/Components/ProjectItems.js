import React, { Component } from 'react';
import ProjectDetails from "./projectDetails";


class ProjectItems extends Component {

  deleteProject(id){
    alert("Deleted from Project items");
    this.props.onDelete(id);
  }

  render() {

    let detail = this.props.project.details.map((detail, index) => {

      console.log(this.props.project.title)
      return (
        <ProjectDetails key={this.props.project.title} detail={detail} id={index + 1} />
      )

    })
    
    return (
      <ul>
        <li className="Projects">
        <strong>{this.props.project.id}</strong>:{this.props.project.category}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp; <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>Delete</a>
        </li>
        
        <li>{this.props.project.title}</li>
        <li>{this.props.project.category}</li>
        <li>{this.props.project.manager}</li>
        {detail}
      </ul>
    );
  }
}



export default ProjectItems;
