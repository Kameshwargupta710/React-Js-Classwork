
import React, { Component } from 'react';
import ProjectItems from './ProjectItems';
import PropTypes from 'prop-types';

class Projects extends Component {


  deleteProject(id){
    this.props.onDelete(id);
  }
  
  render() {

   let projectitems;
   
   if(this.props.projects){
   projectitems=this.props.projects.map(project=>{
        return (
        <ProjectItems onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
        )

       })

   }

    return (  
      <div>
        <h3>Newly added Projects</h3>
        {projectitems}
    </div>
    );
  }


}



Projects.propTypes={
projects:PropTypes.array,
onDelete:PropTypes.func
}




export default Projects;

