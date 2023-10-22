import { feedback } from "../constants/constants"
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
  <section id="clients" className="paddingY flexCenter flex-col relative">
    <div className="absolute -right-1/2 top-0 rounded-full w-[60%] h-[60%] blue__gradient"/>
    <div className="flex w-full relative z-[1] items-center justify-between md:flex-row flex-col mb-6 sm:mb-16">     
      <h2 className="heading2">
      What people are <br className="hidden sm:block"/> saying about us
      </h2>
      <div className="mt-6 sm:mt-0 w-full">
        <p className="paragraph text-left max-w-[450px]">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {
        feedback.map(card=>(
          <FeedbackCard key={card.id} {...card}/>
          
        ))
      }
    </div>
  </section>
)

export default Testimonials
