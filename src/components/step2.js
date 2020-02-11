import React, { Component } from 'react';
import store, { UPDATE_STATE, ADD_POST } from './../redux/store';
import { Link } from 'react-router-dom';

class Step2 extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            text: reduxState.text
        }
    }

    handleChange = e => {
        let action = {
            type: UPDATE_STATE,
            payload: e.target.value,
            stateKey: e.target.name
        }
        store.dispatch(action);
    }

    createPost = () => {
        store.dispatch({
            type: ADD_POST
        })
    }

    render() {
        return (
            <div>
                <h1>Step 2</h1>
                <h3>Text:</h3>
                <input type="text" name="text" onChange={this.handleChange} />
                <Link to='/'><button onClick={this.createPost}>Creat Post</button></Link>
            </div>
        )
    }
}

export default Step2;