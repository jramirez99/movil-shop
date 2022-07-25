import { useNavigate } from 'react-router-dom';


export const Login = () => {
    
    const navigate = useNavigate();

    const onLogin = () => {
;
        navigate('/products', {
            replace: true,
        });
    };

    return (
        <div className="container">

            <div className="login">
                <h1> Login </h1>

                <div className="b-login">
                    <button
                        onClick={ onLogin }
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};
