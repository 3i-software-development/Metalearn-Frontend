import Payment from '@/components/Payment/Payment';
import React from 'react'
import Section from '@/components/Section/Section';
import Pay from '@/components/Payment/Pay';
const index = () => {
  return (
    <Section>
      <Pay />
      <Payment />
    </Section>
  )
}

export default index