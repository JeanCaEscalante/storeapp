import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import { useUser } from "../contexts/authContext";

function Login() {

    const [email, setEmail] = useState('john@mail.com');
    const [password, setPassword] = useState('changeme');
    const {AuthLogin, isAuth} = useUser();
    const session = async (object) => await AuthLogin(object)

    const heanledSubmit =  (e) => {
        e.preventDefault();
      
        toast.promise(session({email,password}), {
            loading: 'Loading',
            success: 'Binvenido',
            error: (err) => `This just happened: ${err.toString()}`,
          });
    }
    return (
        <>
            <h2>Inicio de session</h2>
            <form onSubmit={heanledSubmit}>
            <div>
                Users <input name="email" value={email} onChange={({target}) => setEmail(target.value)} />
            </div>
            <div>
                Password <input name="password" value={password} onChange={({target}) => setPassword(target.value)} />
            </div>
            <button type="submit">login</button>
            </form>
            <Toaster />
        </>
    )
}

export default Login;