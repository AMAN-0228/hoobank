import Button from './Button'
const CTA = () => (
  <section className='flexCenter rounded-[20px] bg-black-gradient-2 marginY padding sm:flex-row flex-col box-shadow'>
    <div className='flex flex-col flex-1'>
      <h2 className='heading2'>
      Let’s try our service now!
      </h2>
      <p className='paragraph mt-5 max-w-[470px]'>
      Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
    </div>

    <div className='flexCenter ml-0 sm:ml-10 sm:mt-0 mt-10'>
      <Button/>
    </div>
  </section>
)

export default CTA
