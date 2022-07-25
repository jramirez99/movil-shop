import { movils } from '../data/movils';


export const getMovilById = ( id ) => {

    return movils.find( movil => movil.id === id )
};
