import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      showAlert: ''
    };
    this.loginCorrect = 'artem@ithillel.ua';
    this.passwordCorrect = '123456';
    // this.handleSubmit = this.handleSubmit.bind(this);;
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  //   if(!this.state.login.match(pattern)) {
  //     this.setState({showAlert: 'An invalid email'})
  //   } else if (this.state.login !== this.loginCorrect) {
  //     this.setState({showAlert: 'Wrong login'})
  //   } else if (this.state.password !== this.passwordCorrect) {
  //     this.setState({showAlert: 'Wrong password'})
  //   } else {
  //     this.setState({showAlert: null})
  //     console.log(`Welcome! Login: ${this.state.login} Password: ${this.state.password}`)
  //   }
  // }
  handleSubmit = (event) => {
    event.preventDefault();
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!this.state.login.match(pattern)) {
      this.setState({showAlert: 'An invalid email'})
    } else if (this.state.login !== this.loginCorrect) {
      this.setState({showAlert: 'Wrong login'})
    } else if (this.state.password !== this.passwordCorrect) {
      this.setState({showAlert: 'Wrong password'})
    } else {
      this.setState({showAlert: null})
      console.log(`Welcome! Login: ${this.state.login} Password: ${this.state.password}`)
    }
  }

  render() {
    return(
      <div className='wrap'>
      <form className="form" onSubmit={this.handleSubmit} noValidate="noValidate">
        <p className="form-title">Log in</p>
        <div className="form-floating">
          <input type="email"  value={this.state.login} onChange={(event)=>{this.setState({login: event.target.value})}} className="form-control" id="floatingInput" placeholder="Email" />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating">
          <input type="password" value={this.state.password} onChange={(event)=>{this.setState({password: event.target.value})}} className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <p>{this.state.showAlert}</p>
        <button type="submit" className="btn btn-outline-primary" disabled={!this.state.login || !this.state.password}>Submit</button>
      </form>
    </div>
    )
  }
}

export default App;
