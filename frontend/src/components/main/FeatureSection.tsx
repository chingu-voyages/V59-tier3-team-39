import type { FeatureBlock } from "../../data/feature"
import Button from "../button/Button"

type FeatureProps = FeatureBlock

const FeatureSection = ({sectionHeading, content, img, button}: FeatureProps) => {

  return (
    <div className=" w-13/14 py-14 md:py-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className='space-y-4'>
            <h2 className="text-[2rem] font-bold">{sectionHeading}</h2>
          
          {content.map(section => (
            <div key={section.lead}>
              {section.heading && (
                <h3 className="text-xl font-bold">{section.heading}</h3>
              )}
              <p className='leading-[1.20]'>
                <span className="font-bold">{section.lead} </span> 
                {section.body}
              </p>
            </div>
          ))}
          {button && <Button {...button} />}
        </div>
        
      </div>
    </div>
  )
}

export default FeatureSection