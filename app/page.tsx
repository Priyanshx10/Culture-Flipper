import HeroSection from '../app/components/HearoSection'
import AboutSection from '../app/components/AboutSection'
import ServicesSection from '../app/components/ServiceSection'
import WhyUsSection from '../app/components/WhyUs'
import LanguagesSection from '../app/components/Language'
import ContactSection from '../app/components/ContactSection'
import Header from './components/Header'
import Footer from './components/Footer'

export default function LandingPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <LanguagesSection />
      <ContactSection />
      <Footer/>
    </>
  )
}