import Form from './Form';
import Data from './Data';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  
  function getLogin (login) {
    setLogin(login)
  }
  function getPassword (password) {
    setPassword(password)
  }

  return (
    <div className='wrap'>
      <Form log={getLogin} pass={getPassword}/>
      <Data login={login} password={password}/>
    </div>
  );
}

export default App;
