import Signup from '@/components/Auth/Signup'
import TabItem from '@/components/News/TabsItem'
import Section from '@/components/Section/Section'
import React from 'react'

const Index = () => {
  return (
    <div>
      <Signup/>
    </div>
  )
}

Index.requiresAuth = false
export default Index