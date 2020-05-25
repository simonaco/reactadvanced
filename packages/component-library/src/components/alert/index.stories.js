import React from 'react'
import Alert from '.'
import GlobalStyle from '../../fonts'

export default {
  component: Alert,
  title: 'Alert',
}

export const withText = () => {
  console.log('With Text')
  return <div>
    <GlobalStyle></GlobalStyle>
    <Alert message="Hohoho" />
    </div>
}

export const withEmoji = () => <Alert message="😀 😎 👍 💯" />
