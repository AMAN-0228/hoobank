import { card } from "../assets"
import { layout } from "../styles"
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className="heading2">
      Find a better card deal <br className="hidden sm:block" /> in few easy steps.
      </h2>
      <p className="paragraph mt-10 max-w-[470px]">
      Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-full h-full " />
    </div>
  </section>
)

export default CardDeal
