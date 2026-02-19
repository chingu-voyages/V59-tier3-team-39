import type { FeatureBlock } from "../../data/feature"
import Button from "../button/Button"
import underline from '../../assets/Underline.png'

type FeatureProps = FeatureBlock

const FeatureSection = ({id, sectionHeading, content, img, button}: FeatureProps) => {

  return (
    <div className="relative grid md:grid-cols-2 items-center">
      <div className="absolute inset-0 top-3 md:top-1 -left-85 md:-left-50 pointer-events-none z-0 bg-[url('/images/solutionbg.png')]"/>
      <div className={`${id === 3 ? 'order-2 md:order-2' : 'order-2 md:order-0'} pt-8 pb-4 px-6 md:p-8 lg:p-10 xl:p-12 z-10`}>
        <div className="font-bold leading-[1.15] mb-6">
          {
            id === 2 ? 
            <h2 className="text-2xl md:text-[1.75rem] lg:text-[2rem] xl:text-4xl">{sectionHeading}<span className="text-primary-tint">SKILL</span></h2>
            : <h2 className="text-[2rem]">{sectionHeading}</h2>
          }
          <img src={underline} alt="" className="-ml-4 max-w-75.5 md:max-w-87.25 lg:max-w-99 xl:max-w-none" />
        </div>
        {content.map(section => (
          <div key={section.lead} className="md:space-y-1 xl:space-y-2 mb-4">
            {section.heading && (
              <h3 className={`${id === 2 ? 'md:text-lg xl:text-2xl' : 'text-xl'} text-secondary-base font-bold leading-[1.35] md:leading-[1.15]`}>
                {section.heading}
              </h3>
            )}
            <p className='text-sm lg:text-base leading-[1.35]'>
              <span className="font-bold">{section.lead} </span> 
              {section.body}
            </p>
          </div>
        ))}
        {button && <Button {...button} />}
      </div>
      <div className="relative h-full order-1 md:order-0">
        <div className="absolute inset-y-0 left-0 w-1 bg-secondary-shade/10" />
        { img && <img src={img.src} alt="" className="h-full object-cover" /> }
      </div>
    </div> 
    
  )
}

export default FeatureSection