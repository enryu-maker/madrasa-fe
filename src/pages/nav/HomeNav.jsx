import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Students from '../home/screens/Students'
import Teacher from '../home/screens/Teacher'
import Courses from '../home/screens/Courses'
import Home from '../home/screens/Home'
import { getCourses, getFees, getProfile, getStudent, getTeacher } from '../../store/actions/homeAction'
import { useDispatch } from 'react-redux'
import Fees from '../home/screens/Fees'

export default function HomeNav() {
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getProfile(setLoading))
        dispatch(getCourses(setLoading))
        dispatch(getStudent(setLoading))
        dispatch(getTeacher(setLoading))
        dispatch(getFees(setLoading))
    }, [dispatch])
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teachers" element={<Teacher />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/fees" element={<Fees />} />


        </Routes>
    )
}
