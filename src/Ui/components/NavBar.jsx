import { Link, useNavigate } from 'react-router-dom';

export const NavBar = () => {
    
    let navigate = useNavigate();

    const onLogout = () => {
        navigate('login', {
            replace: true
        });
    };

    return (
        <div className="bg-barra">
            <div className="container content">
                <div className="logo">
                    <Link to="/products">
                        <p> Movil <span> Shop </span> </p>
                    </Link>
                </div>

                <nav className="nav">
                    <Link 
                        to="/products"
                        className="item"
                    > 
                        Products
                    </Link>
                    <Link 
                        to="/about"
                        className="item"
                    > 
                        About 
                    </Link>
                    <Link 
                        to="/contact"
                        className="item"
                    > 
                        Contact 
                    </Link>
                    <Link 
                        to="/cart"
                    >
                        <ul > 
                            <i className="icon-cart fa-solid fa-cart-shopping"></i>
                        </ul>
                    </Link>
                </nav>

                <div className="sesion">
                    <span> Javier </span>

                    <button onClick={ onLogout }> Log out </button>
                </div>
            </div>
        </div>
    );
};
