import Login from '@/components/Login/Login'
import React from 'react'

const Index = () => {
  return (
    <div><Login/></div>
  )
}

Index.requiresAuth = false
export default Index