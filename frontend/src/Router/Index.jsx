import {
    Routes,
    Route,
} from 'react-router-dom';

import {
    HomeNL,
    HomeLoggedIn,
} from '../pages';

import React from 'react';
const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeNL />} />
            <Route path="/home" element={<HomeLoggedIn />} />
        </Routes>
    )
}

export default Router;