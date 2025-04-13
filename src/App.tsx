import { GlobalStyle } from './styles'
import Header from './components/Header'
import Hero from './containers/Hero'
import Projects from './containers/Projects'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projects />
    </>
  )
}

export default App
