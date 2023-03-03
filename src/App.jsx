import React, { useContext } from 'react'
import TopBar from './components/TopBar'
import Whois from './components/Whois'
import Projects from './components/Projects'
import { TimpeContext } from './context/TimpeContext'
import Footer from './components/Footer'

function App() {

  // Context, to be able to change the state of whois which later on will decide which component to render.
  const { whois } = useContext(TimpeContext);

  return (
      <div className='h-full min-h-screen bg-gr4y'>
        <div className=' mx-auto max-w-5xl p-4'>

          <TopBar />

          {/* Depending on the state of whois, either the Whois or Projects component will be rendered. */}
          {whois
            ? <Whois />
            : <Projects />
          }

          <Footer />

        </div>
      </div>
      
  )
}

export default App
