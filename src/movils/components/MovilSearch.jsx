import { Link } from 'react-router-dom';

export const MovilSearch = ( { movil } ) => {

    const { id, brand, model, price, description } = movil;
    const movilImageUrl = `/assets/movils/${ id }.jpg`;

    return (
        <div className="card-result">
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

            <div className="movil-description-result">
                <h3> Description </h3>

                <p> { description } </p>
            </div>
        </div>
    );
};;
