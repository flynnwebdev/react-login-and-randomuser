import React, { Component } from 'react';
import './App.css';
import Event from './Event'

class App extends Component {
    state = {
        user: false
    }

    componentDidMount() {
        this.getUser()
    }

    getUser = async () => {
        const user = await fetch('https://randomuser.me/api')
        const json = await user.json()
        console.log(json.results[0])
        this.setState({
            user: json.results[0]
        })
    }

    render() {
        const { user } = this.state
        if (user) {
            const fullName = user.name.title + ' ' + user.name.first + ' ' + user.name.last
            return (
                <div>
                    <div className="media border p-3">
                        <img src={user.picture.medium} alt={fullName} className="mr-3 mt-3 rounded-circle" style={{ width: '60px' }} />
                        <div className="media-body">
                            <h4>{fullName}</h4>
                            <h6>{user.email}</h6>
                            <h6>{user.phone}</h6>
                        </div>
                    </div>
                    <button onClick={this.getUser}>Next Random User</button>
                </div>
            )
        } else {
            return <h2>Loading ...</h2>
        }
    }
}

export default App;
