import {discount} from '../assets'
const HeroSection = () => {
  return (
    <section id='home' className="text-white flex flex-col sm:flex-row py-6 sm:py-16">
      <div className='flex flex-col sm:flex-row items-center justify-center px-5'>

        {/* discount  */}
        <div className='flex  gap-3 py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className='text-gray-400 uppercase ml-2'>
            <span className='text-white'>20%</span>{" "}
            Discount for{" "}
            <span className='text-white'>1 Month</span>{" "}
            Account
          </p>
        </div>

        {/* main heading */}
        <div>
          <h1 className='text-slate-400'>
          The Next <br className='hidden sm:block'/>{" "}
          <span className='text-gradient'>Generation</span> 
          <br />{" "}
          Payment Method. 
          </h1>
        </div>

      </div>
      
    </section>
  )
}

export default HeroSection
