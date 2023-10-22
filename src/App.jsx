import {Navbar,HeroSection, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from './components'

function App() {

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className='flexCenter paddingX' >
        <div className='boxWidth'>
          <Navbar/>
        </div>
      </div>
      {/* navbar ends */}
      <div className=' flexCenter paddingX'>
        <div className='boxWidth'>
          <HeroSection/>
        </div>
      </div>
      {/* hero section ends */}
      <div className='flexCenter paddingX'>
        <div className='boxWidth'>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>


    </div>

  )
}

export default App
