import {stats} from '../constants/constants'

const Stats = () => {
  return (
    <section className="w-full flexCenter sm:mb-20 mb-6 flex-1 flex-wrap">
        {
          stats.map(stat=>(
            <div key={stat.id} className='flex flex-1 items-center justify-start m-3 font-poppins'>
              <h4 className='text-white font-semibold text-[30px] xs:text-[40px] leading-[43px] xs:leading-[53px]'>{stat.value}</h4>
              <p className='text-gradient font-normal ml-3 text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] uppercase'>{stat.title}</p>
            </div>
          ))
        }
    </section>
  );
};

export default Stats;
