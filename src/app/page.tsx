'use client'

import Intro from '@/components/Intro'
import IntroActivity from '@/components/IntroActivity'
import { useState } from 'react'

const Home = () => {
  const [section, setSection] = useState(0)

  return (
    <div className="flex items-center justify-center min-h-screen bg-bgBlack ">
      {section == 0 && <IntroActivity setSection={setSection} />}
      {section == 1 && <Intro />}
    </div>
  )
}
export default Home
