import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {


    constructor() {
        super();
        this.setState = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Select Category','web design', 'web dev', 'mobile dev']
    }


    handleSubmit(e) {
        if (this.refs.title.value === "" || this.refs.pManager.value === "") {
            alert("Title or Project Manager is not entered!");

        }
        else {
            //alert(this.refs.title.value)
            //alert(this.refs.category.value)
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value,
                    projectManager: this.refs.pManager.value,
                }
            },function () {
                    //alert(this.state)
                    this.props.addProject(this.state.newProject);
                });
        }
        e.preventDefault();
    }

    render() {

        let categoryOptions = this.props.categories.map(category => {
            return <option key={category}>{category}</option>
        });



        return (
            <div class="form-group">
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div class="form-group">
                        <label >Title</label>
                        <input type="text" ref="title" class="form-control"/>
                    </div>

                    <div class="form-group">
                        <label>Category</label>
                        <select ref="category" class="form-control">
                            {categoryOptions}
                        </select>
                    </div>

                    <div class="form-group">
                        <label >Project Manager</label>
                        <input type="text" ref="pManager" class="form-control"/>
                    </div>

                

                    <input type="submit" className="btn btn-success" value="Submit" />

                </form>
            </div>
        );
    }
}



export default AddProject;
