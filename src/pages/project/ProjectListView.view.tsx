import { useState } from "react";
import { ProjectViewContainer } from "./style";
import { ProjectProps, ProjectList } from '../../ProjectList';


export default function ProjectListView() {
  const [projectList] = useState<ProjectProps[]>(ProjectList)

  return(
    <ProjectViewContainer className="area project_list">
      {projectList.map((projectItem, index) => (
        <li key={index}>
          <div className="card">  
            <div className="card_img">
              <img src={projectItem.img} alt={projectItem.title} />
            </div>

            <div className="card_description">
              <p className="title">{projectItem.title}</p>
              {projectItem.info && (
                <p className="info">{projectItem.info}</p>
              )}
              {projectItem.period && (
                <p className="period">{projectItem.period}</p>
              )}
              <ul className='list use_skill'>
                {projectItem.skills.map((skillItem, index) => (
                  <li key={`skillItem${index}`}>
                    <div className="badge">
                      {skillItem === 'HTML5' && (
                        <img src={`images/skill/html.png`} alt={skillItem} />
                      )}
                      {skillItem === 'CSS3' && (
                        <img src={`images/skill/css.png`} alt={skillItem} />
                      )}
                      {(skillItem !== 'HTML5' && skillItem !== 'CSS3') && (
                        <img src={`images/skill/${skillItem}.png`} alt={skillItem} />
                      )}
                      <span>{skillItem}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {(projectItem.page || projectItem.git) && (
              <div className="card_link">
                {projectItem.page && (
                  <a href={projectItem.page} target="_blank" className="page" rel="noreferrer">
                    <p className="ic" />
                    <p className='text'>Page</p>
                  </a>
                )}
                {projectItem.git && (
                  <a href={projectItem.git} target="_blank" className="git" rel="noreferrer">
                    <p className="ic" />
                    <p className='text'>Github</p>
                  </a>
                )}
              </div>
            )}
          </div>
        </li>
      ))}
    </ProjectViewContainer>
  )
}