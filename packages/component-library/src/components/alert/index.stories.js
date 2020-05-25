import React from 'react'
import Alert from '.'

export default {
  component: Alert,
  title: 'Alert',
}

export const withText = () => {
  console.log('With Text')
  return <Alert message="Hohoho" />
}

export const withEmoji = () => <Alert message="😀 😎 👍 💯" />
