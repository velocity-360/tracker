import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {

	constructor(props, context){
		super(props, context)
		this.showLogin = this.showLogin.bind(this)
		this.state = {

		}
	}

	showLogin(event){
		event.preventDefault()
		console.log('Show Login')
	}

	render(){
		return (
			<div>
				<button onClick={this.showLogin}>Log In</button>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))