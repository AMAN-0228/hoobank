import {Navbar,HeroSection, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from './components'

function App() {

  return (
    <div className='w-full overflow-hidden bg-primary'>
      <div className='px-[32px] md:px-[132px]' >
        <div>
          <Navbar/>
        </div>
      </div>
      {/* navbar ends */}
      <div className='px-[32px] md:px-[132px]'>
        <div>
          <HeroSection/>
        </div>
      </div>
      {/* hero section ends */}
      <div>
        <div>
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
