import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FirstPage from '../pages/firstPage/FirstPage';
import MainPage from '../pages/mainPage/MainPage';
import MarsPage from '../pages/marsPage/MarsPage';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route path='/main_page' element={<MainPage />} />
            <Route path='/mars_page' element={<MarsPage />} />
        </Routes>
    )
};

export default Router
