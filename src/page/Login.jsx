import { Button, Form, Input, Label } from 'reactstrap';
import { useState } from 'react';
import { getAuth } from '../apiBack';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      login,
      password,
    };
    getAuth(data).then();
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
