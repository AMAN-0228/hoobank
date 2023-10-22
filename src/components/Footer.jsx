import { logo } from "../assets"
import {  footerLinks, socialMedia } from "../constants/constants"

const Footer = () => (
  <section className="flexCenter paddingY flex-col">
    <div className="flexStart flex-col md:flex-row w-full mb-8">
      <div className="flex flex-col mr-10 justify-start">
        <img src={logo} alt="hoobank" className="w-[266px] h-[72px] object-contain"/>
        <p className="paragraph max-w-[310px] mt-4">A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className="flex flex-[1.5] justify-between mt-10 md:mt-0 flex-wrap">
        {
          footerLinks.map(footerLink=>(
            <div key={footerLink.key} className="my-4 ss:my-0 flex flex-col min-w-[150px]">
                <h4 className="font-medium text-white text-[18px] leading-[27px]">{footerLink.title}</h4>
                <ul className="list-none mt-4">
                  {
                    footerLink.links.map(link=>(
                      <li key={link.name} className="font-normal text-dimWhite hover:text-secondary text-[16px] leading-[24px] cursor-pointer">
                        {link.name}
                      </li>
                    ))
                  }
                </ul>
            </div>
          ))
        }
      </div>
    </div>

    <div className="w-full flex justify-between items-center  md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-normal text-dimWhite text-[18px] leading-[27px]">
      2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex gap-10 mt-6 md:mt-0">
        {
          socialMedia.map(social=>(
            <img key={social.id} src={social.icon} alt="social media icon" className="w-[21px] h-[21px] object-contain" />
          ))
        }
      </div>
    </div>
  </section>
)

export default Footer
