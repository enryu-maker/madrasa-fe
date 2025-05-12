import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'

export default function AuthNav() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

        </Routes>
    )
}
