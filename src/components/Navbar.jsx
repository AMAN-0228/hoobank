import {useState} from 'react'
import{logo,close,menu} from '../assets'
import { navLinks } from '../constants/constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full py-6 flex justify-between items-center navbar'>
      <img src={logo} alt="logo" className='w-[124px] h-[28px]' />
      {/* desktop navigation */}
      <ul className='hidden sm:flex items-center justify-center gap-5'>
        {
          navLinks.map((item)=>(
            <li key={item.id}
              className='cursor-pointer font-poppins text-[16px] text-white'
            >
              <a href={`#`+item.id}>{item.title}</a>
            </li>
          ))
        }
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        {/* hamburger menu */}
        <img src={toggle?close:menu} alt="menu" onClick={()=>setToggle(prev=>!prev)} className='h-[28px] w-[28px] object-contain '/>
        
        <div className={`absolute top-20 text-white p-6 bg-black-gradient rounded-xl ${toggle?'flex':'hidden'} min-w-[140px] sidebar`}>
        <ul className='flex flex-col list-none items-center mx-auto justify-center gap-6'>
          {
            navLinks.map((item)=>(
              <li key={item.id}
              className='cursor-pointer text-center font-poppins text-[16px] text-white' onClick={()=>setToggle(false)}
              >
                <a href={`#`+item.id}>{item.title}</a>
              </li>
            ))
          }
        </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
