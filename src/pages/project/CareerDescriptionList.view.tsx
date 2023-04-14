import { useState } from "react";
import { CareerDescriptionViewContainer } from "./style";
import { CareerDescriptionProps, CareerDescriptionList } from "../../CareerDescriptionList";
import ParticipationView from "../../component/Participation.view";


export default function CareerDescriptionListView() {
  const [CareerDescription] = useState<CareerDescriptionProps[]>(CareerDescriptionList)

  return(
    <CareerDescriptionViewContainer className="area career_description card">
      {CareerDescription.map((item, index) => (
        <li key={`item${index}`} className="career_item">
          <div className="top">
            <p className="left">{item.period}</p>
            <div className="right">
              <p className="title">{item.title}</p>
              <p className="info">{item.info}</p>
            </div>
          </div>

          <div className="bottom">
            <div className="left">
              {item.img && (
                <img src={item.img} alt={item.title} />
              )}
            </div>
            <div className="right">
              <ul className="list info">
                {item.tag.map((tagItem, iIndex) => (
                  <li key={`infoItem${index}${iIndex}`}><span>#{tagItem}</span></li> 
                ))}
              </ul>

              {item.participation && (
                <ul className="list participation">
                  {item.participation.map((participationItem, pIndex) => (
                    <ParticipationView
                      key={`participationItem${index}${pIndex}`}
                      name={`${participationItem.name}`}
                      percentage={`${participationItem.percentage}`}
                      styles={{
                        width: participationItem.percentage
                      }}
                    />
                  ))}
                </ul>
              )}
              
              {item.cont && (
                <ul className="list cont">
                  {item.cont.map((contItem, cIndex) => (
                    <li key={`contItem${index}${cIndex}`}>{contItem}</li>
                  ))}
                </ul>
              )}

              <ul className='list use_skill'>
                {item.skills.map((skillItem, sIndex) => (
                  <li key={`skillItem${index}${sIndex}`}>
                    <div className="badge">
                      {skillItem !== 'SCSS' && (
                        <img src={`images/skill/${skillItem}.png`} alt={skillItem} />
                      )}
                      <span>{skillItem}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </CareerDescriptionViewContainer>
  )
}