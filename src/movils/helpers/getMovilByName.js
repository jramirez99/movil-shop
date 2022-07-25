import { movils } from "../data/movils";



export const getMovilByName = ( name = '' ) => {
    name = name.toLocaleLowerCase().trim();

    if ( name.length === 0 ) return [];

    return movils.filter( movil => movil.model.toLocaleLowerCase().includes( name ) );
};
