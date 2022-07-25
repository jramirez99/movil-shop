import { Link } from 'react-router-dom';

export const MovilCard = ( { movil, addCart } ) => {

    const { id, brand, model, price } = movil;
    const movilImageUrl = `/assets/movils/${ id }.jpg`;

    return (
        <div className="card">
            <div className="container-image">
                <img 
                    src={ movilImageUrl } 
                    alt={ model }
                    className="image"   
                />
            </div>

            <div className="info">
                <p className="brand"> { brand } </p>
                <p className="model"> { model } </p>
                <p className="price"> ${ price } </p>
            </div>

            <div className="content-buttons">
                <button 
                    className="add-cart"
                    onClick={ () => addCart( movil ) }
                >
                    Add to cart
                </button>
                
                <Link
                    to={`/movil/${ id }`}
                    className="more"
                >
                    More
                </Link>
            </div>

        </div>
    );
};
