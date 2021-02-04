import { Button, Form, Input, Label } from 'reactstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAuth } from '../apiBack';
import { loginAction } from '../store/admin/actionCreator';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const dispatch = useDispatch();

  // login succes
  const loginSuccess = (data) => {
    dispatch(loginAction(data.token, data.family));
    localStorage.setItem('token', data.token);
    localStorage.setItem('admin', data.family);
    history.push('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      login,
      password,
    };
    getAuth(data)
      .then((results) => loginSuccess(results.data))
      // todo : error tratment
      .catch((err) => console.log(err.response));
  };

  return (
    <>
      <h2 className="text-center">Accès administrateur</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="login">Login</Label>
          <Input
            name="login"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">mot de passe</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit">Se connecter</Button>
      </Form>
    </>
  );
};

export default Login;
