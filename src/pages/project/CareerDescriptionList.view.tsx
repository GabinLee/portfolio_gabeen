import { useEffect, useState } from "react";
import { CareerDescriptionViewContainer } from "./style";
import { CareerDescription, CareerDescriptionList } from "../../CareerDescriptionList";
import ParticipationView from "../../component/Participation.view";
import { Link } from "react-router-dom";


export default function CareerDescriptionListView() {
  const [CareerDescription] = useState<CareerDescription[]>(CareerDescriptionList)

  const [showImgModal, setShowImgModal] = useState(false)
  const [selectedImg, setSelectedImg] = useState('')

  useEffect(() => {
    if(!selectedImg) return

  }, [selectedImg])

  return(
    <>
      <CareerDescriptionViewContainer className="area career_description card">
        {CareerDescription.map((item, index) => (
          <li key={`item${index}`} className="career_item">
            <div className="row top">
              <p className="row_left period">{item.period}</p>
              <div className="row_right">
                <h1 className="title flex1">{item.title}</h1>
                <ul className="tag flex f-wrap">
                  {item.tag.map((tagItem, iIndex) => (
                    <li key={`tagItem${index}${iIndex}`}><span>#{tagItem}</span></li> 
                  ))}
                </ul>
              </div>
            </div>

            <div className="row bottom">
              <div className="flex1">
                <p className="info">{item.info}</p>
                {item.cont && (
                  <ul className="list cont">
                    {item.cont.map((contItem, cIndex) => (
                      <li key={`contItem${index}${cIndex}`}>{contItem}</li>
                    ))}
                  </ul>
                )}

                <div className="link_bx">
                  {item.link && (
                    <Link to={item.link} className="link develop">
                      <p className="ic" />
                      <p className="txt">
                        <span>개</span>
                        <span>발</span>
                        <span>이</span>
                        <span>야</span>
                        <span>기</span>
                      </p>
                    </Link>
                  )}

                  {item.homepageLink && (
                    <a href={item.homepageLink} target="_blank" className="link homepage" rel="noreferrer">
                      <p className="ic" />
                      <p className="txt">
                        <span>P</span>
                        <span>a</span>
                        <span>g</span>
                        <span>e</span>
                      </p>
                    </a>
                  )}
                  
                  {item.linkAccount && (
                    <p className="link_account">{item.linkAccount}</p>
                  )}
                </div>

                <ul className='list use_skill'>
                  {item.skills.map((skillItem, sIndex) => (
                    <li key={`skillItem${index}${sIndex}`}>
                      <div className="badge">
                        {skillItem !== 'styled-components' && (
                          <>
                          {skillItem === 'HTML5' && (
                            <img src={`images/skill/html.png`} alt={skillItem} />
                          )}
                          {skillItem === 'CSS3' && (
                            <img src={`images/skill/css.png`} alt={skillItem} />
                          )}
                          {skillItem === 'SCSS' && (
                            <img src={`images/skill/scss.png`} alt={skillItem} />
                          )}
                          {skillItem === 'TypeScript' && (
                            <img src={`images/skill/typescript.png`} alt={skillItem} />
                          )}
                          {skillItem === 'Electron' && (
                            <img src={`images/skill/electron.png`} alt={skillItem} />
                          )}
                          {(skillItem !== 'HTML5' && skillItem !== 'CSS3' && skillItem !== 'SCSS' && skillItem !== 'TypeScript' && skillItem !== 'Electron') && (
                            <img src={`images/skill/${skillItem}.png`} alt={skillItem} />
                          )}
                          </>
                        )}
                        <span>{skillItem}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

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
            </div>

            {/* <div className="">
              <div className="left">
                <button
                  onClick={() => {
                    setShowImgModal(true)
                    setSelectedImg(`${item.img}`)
                  }}
                >
                  {item.img && (
                    <img src={item.img} alt={item.title} />
                  )}
                </button>
              </div>
            </div> */}
          </li>
        ))}
      </CareerDescriptionViewContainer>

      {showImgModal && (
        <div className="modal">
          <div className="card">
            <button className="close_btn"
              onClick={() => setShowImgModal(false)}
            >
              <img src="images/icon/clear.svg" alt="닫기" />
            </button>
            <img src={selectedImg} alt="project_img" className="project_img" />
          </div>
        </div>
      )}
    </>
  )
}