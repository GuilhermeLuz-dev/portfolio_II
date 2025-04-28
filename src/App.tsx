import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'

import { darkTheme } from './Themes/dark'
import Header from './components/Header'
import Hero from './containers/Hero'
import Projects from './containers/Projects'
import About from './containers/About'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projects />
      <About />
    </ThemeProvider>
  )
}

export default App
