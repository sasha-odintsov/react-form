import './Form.css';
import { useState } from 'react';

const Form = ({ log, pass }) => {
    const loginCorrect = 'artem@ithillel.ua';
    const passwordCorrect = '123456';
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState();

    function handleSubmit(event) {
      event.preventDefault();
      const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

      if(!login.match(pattern)) {
        setShowAlert('An invalid email')
      } else if (login !== loginCorrect) {
        setShowAlert('Wrong login')
      } else if (password !== passwordCorrect) {
        setShowAlert('Wrong password')
      } else {
        setShowAlert('')
        log(login)
        pass(password)
      }
    }

    return (
        <div className='wrap'>
          <form className="form" onSubmit={handleSubmit} noValidate="noValidate">
            <p className="form-title">Log in</p>
            <div className="form-floating">
              <input 
              type="email" 
              value={login} 
              onChange={(event) => setLogin(event.target.value)} 
              className="form-control" 
              id="floatingInput" 
              placeholder="Email" 
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <input 
              type="password" 
              value={password} 
              onChange={(event) => setPassword(event.target.value)} 
              className="form-control" 
              id="floatingPassword" placeholder="Password" 
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <p>{showAlert}</p>
            <button type="submit" className="btn btn-outline-primary" disabled={!login || !password}>Submit</button>
          </form>
        </div>
      );
}

export default Form;