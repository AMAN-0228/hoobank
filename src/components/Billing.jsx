import { apple, bill, google } from "../assets"
import styles, { layout } from "../styles"

const Billing = () =>(
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-full h-full relative z-[5]"/>
      <div className="absolute z-[3] w-1/2 h-1/2 -left-1/2 top-0 white__gradient rounded-full"/>
      <div className="absolute z-0 w-1/2 h-1/2 -left-1/2 bottom-0 pink__gradient rounded-full"/>
    </div>

    <div className=" font-poppins flex flex-col ">
      <h2 className={styles.heading2}>
      Easily control your <br className="hidden md:block"/> billing & invoicing.
      </h2>
      <p className={`${styles.paragraph } mt-5 max-w-[470px]`}>
      Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      <div className="flex flex-wrap flex-row sm:mt-10 mt-6">
        <img src={apple} alt="apple_store" className="w-[120px] h-[42px] object-contain cursor-pointer mr-5"/>
        <img src={google} alt="google_store" className="w-[120px] h-[42px] object-contain cursor-pointer"/>
      </div>
    </div>
  </section>
)


export default Billing
