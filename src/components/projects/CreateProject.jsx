import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if(!this.state.title) return alert("please fill in title")
        if(!this.state.content) return alert("please fill in content")
        this.props.createProject(this.state);
        this.props.history.push('/')
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to='/signin' />
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
                        <button className="btn pink lighten-1 z-depth-0">Create New Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
