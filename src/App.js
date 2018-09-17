import axios from 'axios'
import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg'

class App extends Component {

    state = {
        question: null
    }

    componentDidMount() {
        axios.get("http://35.204.49.134/")
            .then(response => this.setState({ question: response.data }))
    }

    handleClick = (id) => {
        axios.get("http://35.204.49.134//" + this.state.question.id + "/" + id)
            .then(response => this.setState({ question: response.data}))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Fysio-Online</h1>
                </header>
                <div className="App-intro">
                    { this.state.question == null ? <div>Loading</div> :
                        <div>
                            <div>{ this.state.question.content }</div>
                            <div className="wrapper">
                                { this.state.question.answers && this.state.question.answers.map(answer =>
                                    <div className="answer" key={answer.id} onClick={e => this.handleClick(answer.id)}>{ answer.content }</div>
                                ) }
                            </div>
                        </div>
                    }

                </div>
            </div>
        )
    }
}

export default App
