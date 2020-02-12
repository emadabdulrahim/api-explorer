import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import '../theme/reset.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
