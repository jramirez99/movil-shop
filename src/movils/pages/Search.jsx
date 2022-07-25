import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getMovilByName } from '../helpers/getMovilByName';
import { MovilCard } from '../components/MovilCard';
import { MovilDesc } from './MovilDesc';
import { MovilSearch } from '../components/MovilSearch';

export const Search = () => {

    const navigte = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );
    const movils = getMovilByName( q );

    const { searchText, onInputChange } = useForm({
        searchText: q
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();

        navigte(`?q=${ searchText }`);
    };

    return (

        <>
            <div className="search">
                <form onSubmit={ handleSubmit }>
                    <input 
                        type="text"
                        placeholder="search"
                        name="searchText"
                        value={ searchText }
                        onChange={ onInputChange }
                    />
                </form>
            </div>
        
            {
                movils.map( movil => (
                    <MovilSearch 
                        key={ movil.id }
                        movil={ movil }
                    />
                ) )
            }
        </>
    );
};
