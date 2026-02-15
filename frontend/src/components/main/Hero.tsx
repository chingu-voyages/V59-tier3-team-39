import { heroData } from "../../data/feature"
import Button from "../button/Button"
import Card from "./Card"



const Hero = () => {

  const { sectionHeading, content, img, button } = heroData
  return (
    <section className="mx-auto grid md:grid-cols-2 pt-6 md:gap-6 lg:gap-13 items-start">
      {/* <div 
        style={{ backgroundImage: `url(${img.src})`}}
        className="absolute -right-8 inset-y-0 w-[564px] lg:w-173.5  pointer-events-none bg-no-repeat bg-right bg-contain z-0" 
      /> */}
      <div className="space-y-4 md:pl-8 lg:pl-12 md:py-8 lg:py-13">
        <div className="space-y-2 z-10">
          <h1 className="md:text-[2.25rem] lg:text-[3.375rem] font-bold leading-[1.10]">
            Your <span className="text-secondary-tint">first attempt</span> {" "}
            is rarely your <span className="text-primary-tint">best effort</span>
          </h1>
          <h2 className="md:text-lg lg:text-2xl font-light leading-[1.15]">{sectionHeading}</h2>
        </div>
        {content.map((section, index) => (
            <div key={index} className='max-w-120'>
              <p className="md:text-sm lg:text-lg leading-[1.35]">
                <span className="font-bold">{section.lead} </span> 
                {section.body}
              </p>
            </div>
          ))}
        {button && <Button {...button} />}
      </div>
      <div className="overflow-visible min-h-0">
        <div className="flex justify-end md:pt-8 lg:pt-13 md:pr-8 lg:pr-12 md:-mb-8 lg:-mb-32 items-start">
          {<Card />}
        </div>
      </div>
    
    </section>
  )
}

export default Hero