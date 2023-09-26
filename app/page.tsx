import FlipCard from './components/flipCard'
import CardGrid from './components/projects'
import Hero from './components/hero'

export default function Home() {
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-12">
    <Hero />
    {/* <FlipCard />      */}
    <CardGrid />
    </div>
  )
}
