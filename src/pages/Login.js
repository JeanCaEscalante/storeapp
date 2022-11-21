import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { authLogin } from "../services/authentication";
import { Link } from "react-router-dom";

function Login() {

    const [email, setEmail] = useState('john@mail.com');
    const [password, setPassword] = useState('changeme');

    const session = async (object) => await await authLogin(object)

    const heanledSubmit =  (e) => {
        e.preventDefault();
      
        toast.promise(session({email,password}), {
            loading: 'Loading',
            success: ({access_token}) => `Successfully ${access_token}`,
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