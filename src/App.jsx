import Navbar from './components/Navbar'
import AnnouncementBar from './components/AnnouncementBar'
import Hero from './components/Hero'
import About from './components/About'
import Amenities from './components/Amenities'
import Rooms from './components/Rooms'
import CtaBanner from './components/CtaBanner'
import Attractions from './components/Attractions'
import Owners from './components/Owners'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <main>
        <Hero />
        <About />
        <Amenities />
        <Rooms />
        <CtaBanner />
        <Attractions />
        <Owners />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
