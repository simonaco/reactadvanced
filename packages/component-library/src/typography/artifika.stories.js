import React from 'react'
import Alert from '.'
import Artifka from './artifika'

export default {
  component: Artifka,
  title: 'Artifka',
}

export const withText = () => {
  console.log('With Text')
  return <Artifka>Hello from Artifika</Artifka>
}
