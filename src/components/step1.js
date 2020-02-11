import React, {Component} from 'react';
import store, {UPDATE_STATE} from './../redux/store';
import {Link} from 'react-router-dom';

class Step1 extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state ={
            title: reduxState.title,
            img: reduxState.img
        }
    }

    handleChange = e => {
        store.dispatch({
            type: UPDATE_STATE,
            payload: e.target.value,
            stateKey: e.target.name
        })
        this.setState({[e.target.name]: e.target.value})
    };



    render() {
        return(
            <div>
                <h1>Step 1</h1>
                <h3>Title:</h3>
                <input type="text" name='title' onChange={this.handleChange}/>
                <h3>Img:</h3>
                <input type="text" name="img" onChange={this.handleChange}/>
                <Link to='/step2'><button>Step 2</button></Link>
            </div>
        )
    }
}

export default Step1