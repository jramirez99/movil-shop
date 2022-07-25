import { Routes, Route, Navigate } from 'react-router-dom';

import { About, Contact, MovilDesc, Products, Search, Cart } from '../movils';
import { Footer, NavBar } from '../Ui';

export const MovilRouter = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="products" element={<Products />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="search" element={<Search />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="movil/:id" element={<MovilDesc />} />


                    <Route path="/" element={<Navigate to="products" />} />
                </Routes>
            </div>       
            
            <Footer />
        </>
    );
};
