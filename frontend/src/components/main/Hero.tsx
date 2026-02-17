import { heroData } from "../../data/feature"
import Button from "../button/Button"
import Card from "./Card"



const Hero = () => {

  const { sectionHeading, content, button } = heroData

  return (
    <section className="relative mx-auto grid md:grid-cols-2 pt-5 md:gap-6 lg:gap-8 xl:gap-13 items-start">
      <div 
        className="
          absolute sm:right-6 md:-right-34 md-lg:-right-38 lg:-right-12 xl:-right-8 top-100.5 sm:top-91 md:top-5 md-lg:top-11 lg:top-2 xl:top-4.5 
          inset-y-0 w-full sm:w-140 md:w-143 md-lg:w-160 md-lg-x:w-173.5 lg:w-160 xl:w-173.5 pointer-events-none bg-center bg-no-repeat bg-contain z-0
          bg-[url('/images/mobileBg.png')] sm:bg-[url('/images/desktopBg.png')] md:bg-[url('/images/tabletBg.png')] md-lg:bg-[url('/images/desktopBg.png')]" 
      />
      <div className="w-full space-y-3.5 lg:space-y-3.75 xl:space-y-4 px-6 md:px-0 md:pl-8 lg:pl-9 xl:pl-12 md:py-8 pt-14 lg:py-13 xl:py-13 z-10">
        <div className="space-y-2">
          <h1 className="text-[2rem] md:text-[2.125rem] md-lg:text-[2.35rem] md-lg-x:text-[2.6rem] lg:text-[2.7rem] xl:text-[3.375rem] font-bold leading-[1.10]">
            Your <span className="text-secondary-tint">first attempt</span> {" "}
            is rarely your <span className="text-primary-tint">best effort</span>
          </h1>
          <h2 className="md:text-lg md-lg-x:text-[20px] lg:text-[21px] xl:text-2xl font-light leading-[1.15]">
            {sectionHeading}
          </h2>
        </div>
        {content.map((section, index) => (
            <div key={index} className='max-w-120'>
              <p className="text-sm md-lg:text-base lg:text-lg leading-[1.35]">
                {section.lead && <span className="font-bold">{section.lead} </span>} 
                {section.body}
              </p>
            </div>
          ))}
          <div className="flex justify-center md:justify-start mb-8 md:mb-0">
            {button && <Button {...button} />}
          </div>
        
      </div>
      <div className="z-10 flex justify-center">
        <div className="flex px-6 md:px-0 md:justify-end md:items-start md:pt-8 lg:pt-13 md:pr-8 lg:pr-9 xl:pr-12 -mb-8 xl:-mb-20">
          <Card />
        </div>
      </div>
    
    </section>
  )
}

export default Hero