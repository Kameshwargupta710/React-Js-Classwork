import React, { Component } from 'react';

class ProjectDetails extends Component {

  render() {

    return (
      <div>
        Detail{this.props.id}
        <ul>
          <li>{this.props.detail.duration}</li>
          <li>{this.props.detail.budget}</li>
        </ul>
      </div>
    );
  }
}



export default ProjectDetails;
