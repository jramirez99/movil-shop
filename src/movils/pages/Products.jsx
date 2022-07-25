import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Footer } from "../../Ui/components/Footer";
import { MovilList } from "../components/MovilList";
import { Cart } from './Cart';
import { Search } from "./Search";

export const Products = () => {

    let productsInit = JSON.parse( localStorage.getItem( 'products' ) );
    if ( !productsInit ) {
        productsInit = [];
    };

    const [state, setstate] = useState( productsInit );

    useEffect( () => {
        if ( productsInit ) {
            localStorage.setItem( 'products', JSON.stringify( state ) )
        } else {
            localStorage.setItem( 'products', JSON.stringify( [] ) );
        }
            
        }, [ state, productsInit] );

    const addCart = ( movil ) => {
        setstate([
            ...state,
            movil
        ]);

        toast.success('Product add success', {
                theme: "colored",
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        };
        

    return (
        <>
            <Search />

            <h1> Products </h1>

            <MovilList 
                brand='samsung'
                addCart={ addCart }
            />

            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

            {
                state.map( product => (
                    // console.log(product)
                    <Cart
                        key={product.id}
                        product={ product }
                    />

                ))
            }
        </>
    );
};
