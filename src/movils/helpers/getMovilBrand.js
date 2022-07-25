import { movils } from '../data/movils';

export const getMovilBrand = ( brand ) => {
    const validBrand = [ 'samsung', 'huawei' ];

    if ( !validBrand.includes( brand ) ) {
        throw new Error( `${ brand } is not a valid brand ` );
    };

    return movils.filter( movil => movil.brand === brand );
};