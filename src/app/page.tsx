import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AboutTemplate from '@/templates/About'
import ContactTemplate from '@/templates/Contact'
import HomeTemplate from '@/templates/Home'
import ProjectsTemplate from '@/templates/Projects'

const Home = () => {
  return (
    <main>
      <Header />
      <HomeTemplate />
      <AboutTemplate />
      <ProjectsTemplate />
      <ContactTemplate />
      <Footer />
    </main>
  )
}

export default Home
