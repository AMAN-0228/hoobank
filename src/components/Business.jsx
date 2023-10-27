import Button from './Button'
import {features} from '../constants/constants'
import style,{layout} from '../styles'

const FeatureCard =({icon,title,content}) =>(
  <div className='flex flex-row  p-6 rounded-[20px] feature-card'>
    <div className='w-[64px] h-[64px] rounded-full flexCenter bg-dimBlue '>
      <img src={icon} alt="title" className='w-1/2 h-1/2 object-contain' />
    </div>
   
    <div className='flex flex-col flex-1 ml-3'>
      <h4 className='text-white font-poppins text-[18px] leading-[23px] mb-1 font-bold'>{title}</h4>
      <p className='text-dimWhite font-poppins text-[16px] leading-[24px] mb-1 font-normal'>{content}</p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>
        You do the business, <br className='hidden sm:block'/> we’ll handle the money.
        </h2>
        <p className={`${style.paragraph} max-w-[470px]  mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button />
      </div>

      <div className={`${layout.sectionImg } flex-col`}>
        {
          features.map((feature)=>(
            <FeatureCard key={feature.id}  {...feature}/>
          ))
        }
      </div>
      Business
    </section>
  )
}

export default Business
