import FlipCard from './components/flipCard'
import CardGrid from './components/projects'
import Hero from './components/hero'
import ArrowCard from './components/arrowCard'

import Features from './features/page'

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {/* <FlipCard />      */}
      <ArrowCard />
      <Features />
      <CardGrid />
    </div>
  )
}
