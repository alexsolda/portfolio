import Footer from '@/components/Footer'
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
      <Footer />
    </main>
  )
}

export default Home
