import type { FeatureBlock } from "../../data/feature"
import Button from "../button/Button"
import underline from '../../assets/Underline.png'
import underlineSm from '../../assets/Underlinesm.png'
import divider from '../../assets/chingu/divider.svg'
import dividersm from '../../assets/chingu/dividerSm.svg'

type FeatureProps = FeatureBlock

const FeatureSection = ({id, sectionHeading, content, img, button}: FeatureProps) => {

  return (
    <section className="relative grid md:grid-cols-2 items-center">
      {id === 2 && <div className="absolute inset-0 top-3 md:top-1 -left-85 md:-left-50 pointer-events-none z-0 bg-[url('/images/solutionbg.png')]"/>}
      <div className={`${id === 3 ? 'order-2 md:order-2' : 'order-2 md:order-0'} py-8 px-6 md:p-8 lg:p-10 xl:p-12 z-10`}>
        <div className={`font-bold leading-[1.15] ${id === 3 ? 'mb-5 md:mb-4' : 'mb-6'}`}>
          {
            id === 2 ? 
            <h2 className="text-2xl md:text-[1.75rem] lg:text-[2rem] xl:text-4xl">{sectionHeading}<span className="text-primary-tint">SKILL</span></h2>
            : <h2 className="text-2xl lg:text-[1.75rem] xl:text-[2rem]">{sectionHeading}</h2>
          }
          <img 
            src={id === 3 ? underlineSm : underline} 
            alt="" 
            className={`${id === 3 ? 'xl:max-w-none lg:max-w-45 max-w-39 -ml-3.5' : 'max-w-75.5 md:max-w-87.25 lg:max-w-99 xl:max-w-none -ml-4'}`} 
          />
        </div>
        <div className={`${id === 3 ? 'space-y-5 md:space-y-4 mb-5 md:mb-4' : 'space-y-4 lg:space-y-6'}`}>
        {content.map(section => (
          <div key={section.lead} className={`${id === 3 ? 'space-y-1' : "md:space-y-1 xl:space-y-2"}`}>
            {section.heading && (
              <h3 className={`${id === 2 ? 'md:text-lg xl:text-2xl' : 'text-lg md:text-xl'} text-secondary-base font-bold leading-[1.15] md:leading-[1.15]`}>
                {section.heading}
              </h3>
            )}
            <p className='text-sm lg:text-base leading-[1.35]'>
              <span className="font-bold">{section.lead} </span> 
              {section.body}
            </p>
          </div>
        ))}
        </div>
        {button && <Button {...button} />}
      </div>
      <div className="relative h-full order-1 md:order-0 mx-auto">
        <div className="absolute inset-y-0 left-0 w-1 bg-secondary-shade/10" />
        { img && <img src={img.src} alt="" className={`${id === 3 ? 'xl:max-h-118' : ''} object-cover object-center h-full w-full`} /> }
        {id === 3 && <img src={divider} alt="decorative divider" className="hidden md:block absolute md:w-12 lg:w-12.5 top-0 md:right-0 lg:-right-6.25 h-full"/>}
        {id === 3 && <img src={dividersm} alt="decorative divider" className="md:hidden absolute -bottom-2 w-full"/>}
      </div>
    </section> 
    
  )
}

export default FeatureSection