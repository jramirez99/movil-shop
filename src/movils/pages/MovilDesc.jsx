import { useNavigate, useParams } from 'react-router-dom';
import { Footer } from '../../Ui/components/Footer';

import { getMovilById } from '../helpers/getMovilById';

export const MovilDesc = () => {

    const { id } = useParams();
    const movil = getMovilById( id );
    const { brand, model, price, description } = movil;
    
    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1)
    };

    if ( !movil ) {
        return <Navigate to="/products" />
    };  

    return (
        <>
            <div className='container-desc'>
                <div className="movil-image">
                    <img 
                        src={ `/assets/movils/${ id }.jpg` } 
                        alt={ model }
                    />
                </div>

                <div className="content-movil">
                    <div className="movil-info">
                        <p className="brand"> { brand } </p>
                        <p className="model"> { model } </p>
                        <p className="price"> ${ price } </p>

                        <button>
                            Add to cart
                        </button>
                    </div>

                    <div className="movil-description">
                        <h3> Description </h3>

                        <p> { description } </p>
                    </div>

                    <div className="content-back">
                        <button
                            onClick={ onNavigateBack }
                            className="back"
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
