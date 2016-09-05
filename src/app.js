import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Modal } from 'react-bootstrap'

class App extends Component {

	constructor(props, context){
		super(props, context)
		this.showLogin = this.showLogin.bind(this)
		this.hideLogin = this.hideLogin.bind(this)
		this.state = {
			showModal: false

		}
	}

	showLogin(event){
		event.preventDefault()
		console.log('Show Login')
		this.setState({
			showModal: true
		})

	}

	hideLogin(){
		this.setState({
			showModal: false
		})
	}

	render(){
		return (
			<div>
				<button onClick={this.showLogin}>Log In</button>
		        <Modal bsSize="sm" show={this.state.showModal} onHide={this.hideLogin}>
			        <Modal.Body style={{background:'#f9f9f9', padding:24, borderRadius:3}}>
			        	<div style={{textAlign:'center'}}>
				        	<h4>Log In</h4>
			        	</div>
			        	<input onChange={this.updateCredentials} id="email" className="form-control" style={{marginBottom:12}} type="text" placeholder="Email" />
			        	<input onChange={this.updateCredentials} id="password" className="form-control" style={{marginBottom:12}} type="password" placeholder="Password" />
						<div style={{textAlign:'center', marginTop:24}}>
							<a onClick={this.login} href="#" className="button button-border button-dark button-rounded button-large noleftmargin">Log In</a>
						</div>
			        </Modal.Body>
		        </Modal>

			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))