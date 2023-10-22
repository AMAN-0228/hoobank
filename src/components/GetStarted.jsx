import {arrowUp} from '../assets'
const GetStarted = () => {
  return (
    <div className="bg-blue-gradient rounded-full w-[120px] h-[120px] p-[2px] cursor-pointer">
        <div className="flex flex-col items-center justify-center bg-primary rounded-full w-full h-full ">
            <div className="flex flex-row items-start justify-center">
                <p className="font-poppins text-[18px] font-medium leading-[23px] mr-2">
                    <span className="text-gradient">Get</span>
                </p>
                    <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px]' />
            </div>
                <p className="font-poppins text-[18px] font-medium leading-[23px] text-gradient">
                    Started
                </p>
        </div>
    </div>
  )
}

export default GetStarted
