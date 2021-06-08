import React, { Component } from 'react'

export class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>    
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange} ></textarea>
                    </div>    
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProject
