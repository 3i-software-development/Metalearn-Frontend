import { useRouter } from 'next/router'
import React from 'react'

const Index = () => {
    const router = useRouter()
    console.log(router.query)
  return (
    <div>VnPay</div>
  )
}

export default Index