import React from 'react'
import Index from './pages/nav/Index'
import { useDispatch } from 'react-redux'
import { Init } from './store/actions/authAction'

export default function App() {
  const dispatch = useDispatch()
  React.useState(() => {
    dispatch(Init())
  }, [])
  return (
    <>
      <Index />
    </>
  )
}
