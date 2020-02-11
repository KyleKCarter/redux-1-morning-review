import React, { Component } from 'react';
import store from './../redux/store';
import { Link } from 'react-router-dom';
import '../styles/homes.css'

class Home extends Component {
    constructor() {
        super()
        const reduxState = store.getState()
        this.state = {
            posts: reduxState.posts
        }
    }

    render() {
        console.log(this.state.posts)
        let mappedPosts = this.state.posts.map((val, index) => {
            return (
                <div key={index} className='post'>
                    <h1>{val.title}</h1>
                    <img src={val.img} alt="img" />
                    <p>{val.text}</p>
                </div>
            )
        })
        return (
            <div className='home_page'>
                <header>
                    <Link to='/step1'><button>New Post</button></Link>
                </header>
                {mappedPosts}
            </div>
        )
    }
}

export default Home;