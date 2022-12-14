import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useUser } from '../contexts/authContext';

function Login() {
  const [email, setEmail] = useState('john@mail.com');
  const [password, setPassword] = useState('changeme');
  const { AuthLogin } = useUser();

  const heanledSubmit = (e) => {
    e.preventDefault();

    toast.promise(AuthLogin({ email, password }), {
      loading: 'Loading',
      success: 'Binvenido',
      error: (err) => `This just happened: ${err.toString()}`,
    });
  };
  return (
    <main>
      <h2>Inicio de session</h2>
      <form onSubmit={heanledSubmit}>
        <div>
          Users
          <input name="email" value={email} onChange={({ target }) => setEmail(target.value)} />
        </div>
        <div>
          Password
          <input name="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button type="submit">login</button>
      </form>
      <Toaster />
    </main>
  );
}

export default Login;
