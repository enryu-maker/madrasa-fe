import React from 'react'
import { useSelector } from 'react-redux'
import HomeNav from './HomeNav'
import AuthNav from './AuthNav'
import { Routes } from 'react-router-dom'
export default function Index() {
    const access = useSelector(state => state.reducer.access)
    return (
        <div>
            {
                access != null ? <HomeNav /> : <AuthNav />
            }
        </div>
    )
}
