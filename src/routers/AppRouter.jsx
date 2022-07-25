import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '../auth';
import { MovilRouter } from './MovilRouter';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Login />} />

                <Route path="/*" element={<MovilRouter />} />
            </Routes>
        </>
    );
};
