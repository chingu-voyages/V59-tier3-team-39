import type { FeatureBlock } from "../../data/feature"
import Button from "../button/Button"

type FeatureProps = FeatureBlock

const FeatureSection = ({heroHeading, sectionHeading, content, img, reverse, button}: FeatureProps) => {

  return (
    <div className="py-12 w-13/14 mx-auto">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div className={`space-y-4 ${reverse ? 'md:order-2' : ''}`}>
          {heroHeading ? 
            <div>
              <h1 className="text-[2.75rem] font-bold leading-13 whitespace-pre-line">{heroHeading}</h1>
              <h2 className="text-2xl">{sectionHeading}</h2>
            </div> :
            <h2 className="text-[2rem] font-bold">{sectionHeading}</h2>
          }
          {content.map(section => (
            <div key={section.lead}>
              {section.heading && (
                <h3 className="text-xl font-bold">{section.heading}</h3>
              )}
              <p className={`${heroHeading ? 'text-xl' : ''} leading-[1.20]`}>
                <span className="font-bold">{section.lead} </span> 
                {section.body}
              </p>
            </div>
          ))}
          {button && <Button {...button} />}
        </div>
        <img src={img.src} alt={img.alt} />
      </div>
    </div>
  )
}

export default FeatureSection
