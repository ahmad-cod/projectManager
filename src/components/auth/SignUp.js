import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

export class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    render() {
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange} />
                    </div>    
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange} />
                    </div>    
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>    
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />  
                    </div>
                    <div className='red-text center'>
                        { authError ? <p>{authError}</p> : null}
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Account</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.auth)
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
