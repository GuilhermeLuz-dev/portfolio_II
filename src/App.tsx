import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'

import { darkTheme } from './Themes/dark'
import Header from './components/Header'
import Hero from './containers/Hero'
import Projects from './containers/Projects'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projects />
    </ThemeProvider>
  )
}

export default App
