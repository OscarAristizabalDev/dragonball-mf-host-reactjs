import React from 'react'
import { NavLink, Navigate, Route, Routes } from 'react-router-dom'

import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'
import { PersonajesPage } from '../pages/PersonajesPage'
import { NotFound } from '../pages/NotFound'

export const AppRouter = () => {
    return (
        <div className='container mx-10 mt-10'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/personajes' element={<PersonajesPage />} />
                <Route path='/about' element={<AboutPage />} />

                {/* Manejo de rutas no agregadas */}
                {/* <Route path='/*' element={<NotFound />} /> */}
                <Route path='/*' element={<Navigate to="/" />} />
            </Routes>
            <NavLink to={"/"}></NavLink>
        </div>
    )
}
