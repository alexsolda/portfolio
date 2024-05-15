import Header from '@/components/Header'
import AboutTemplate from '@/templates/About'
import HomeTemplate from '@/templates/Home'
import ProjectsTemplate from '@/templates/Projects'

const Home = () => {
  return (
    <main>
      <Header />
      <HomeTemplate />
      <AboutTemplate />
      <ProjectsTemplate />
    </main>
  )
}

export default Home
