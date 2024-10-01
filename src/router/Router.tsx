import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FirstPage from '../pages/firstPage/FirstPage';
import MainPage from '../pages/mainPage/MainPage';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route path='/main_page' element={<MainPage />} />
        </Routes>
    )
};

export default Router
