import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles'
import { useRef, useEffect, useState } from 'react'

import { useSectionObserver } from './hooks/useSectionObserver'
import { darkTheme } from './Themes/dark'
import Header from './components/Header'
import Hero from './containers/Hero'
import Projects from './containers/Projects'
import About from './containers/About'
import Contacts from './containers/Contacts'
import Footer from './containers/Footer'

function App() {
  const [heroVisible, setHeroVisible] = useState(true)

  const sectionsRefs = {
    heroRef: useRef<HTMLElement>(null),
    projectsRef: useRef<HTMLElement>(null),
    aboutRef: useRef<HTMLElement>(null),
    contactsRef: useRef<HTMLElement>(null),
  }

  const activeSection = useSectionObserver(sectionsRefs)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting), {
      threshold: 0.9,
    })

    if (sectionsRefs.heroRef.current) observer.observe(sectionsRefs.heroRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header transparent={heroVisible} activeSection={activeSection} />
      <Hero ref={sectionsRefs.heroRef} />
      <Projects ref={sectionsRefs.projectsRef} />
      <About ref={sectionsRefs.aboutRef} />
      <Contacts ref={sectionsRefs.contactsRef} />
      <Footer />
    </ThemeProvider>
  )
}

export default App
