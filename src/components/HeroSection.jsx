import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const HeroSection = () => {
  return (
    <section id="home" className=" flex flex-col md:flex-row paddingY">
      <div className="flex-1 flexStart flex-col xl:px-0 sm:px-12 px-6">
        {/* discount  */}
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="paragraph uppercase ml-2">
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        {/* main heading */}
        <div className="flexCenter w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>

          {/* get started btn */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h2 className="font-poppins font-semibold ss:text-[3.7rem] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h2>

        <p className="max-w-[470px] paragraph mt-5">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>


      {/*robot arm desktop view  */}
      <div className="flex-1 flexCenter md:my-0 my-10 relative">
        <img
          src={robot}
          alt="billing"
          className="relative z-[5] w-full h-full object-contain"
        />
        <div className="absolute z-0 top-0 pink_gradient h-[35%] w-[45%]"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient "/>      
      </div>

      {/* robot arm for mobile view */}
      <div className="ss:hidden flexCenter">
            <GetStarted />
      </div>
    </section>
  );
};

export default HeroSection;
