import React from 'react'
import { getMovilBrand } from '../helpers/getMovilBrand';
import { MovilCard } from './MovilCard';

export const MovilList = ( { brand, addCart } ) => {

    const movils = getMovilBrand( brand );

    return (
        <div className="grid">
            {
                movils.map( movil => (
                    <MovilCard 
                        key={ movil.id }
                        movil={ movil }
                        addCart={ addCart }
                    />
                ) )
            }
        </div>
    );
};
