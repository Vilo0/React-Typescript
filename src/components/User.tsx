import { useState } from 'react';

interface UserI {
    uid: string;
    name: string;
}

export const User = () => {
    const [user, setUser] = useState<UserI>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Edgard Vilo'
        });
    }

    return (
        <div className="mt-4">
            <h3>Usuario: useState</h3>

            <button
                className="btn btn-outline-primary"
                onClick={login}
            >
                Login
            </button>

            {
                (!user)
                 ? <pre>No hay usuario</pre>
                 : <pre>{ JSON.stringify(user) }</pre>
            }
        </div>
    )
}
