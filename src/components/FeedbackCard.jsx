import { quotes } from "../assets"

const FeedbackCard = ({content,name,title,img}) => {
  return (
    <div className="flex justify-between flex-col rounded-[20px] px-10 py-12 feedback-card max-w-[350px] mr-0 sm:mr-5 md:mr-9 my-5">
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain" />
      <p className="text-[18px] text-white leading-[32px] my-6 font-normal">{content}</p>
      <div className="flex ">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div className="flex flex-col ml-4">
          <h4 className="text-[20px] text-white leading-[32px] font-semibold">{name}</h4>
          <p className="text-[16px] text-dimWhite leading-[24px] font-normal">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
