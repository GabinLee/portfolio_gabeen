import { useEffect, useState } from 'react';
import { Container } from '../styles/main';

import { Project, ProjectList } from '../project';


export default function MainPage() {

  const [isScroll, setIsScroll] = useState(false)
  const [projectList] = useState<Project[]>(ProjectList)


  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  };


  return (
    <Container className={`${isScroll ? 'scroll' : ''}`}>
      <header>
        <div className="inner">
          <img src="images/gabeen_logo.png" alt="가빈" />
        </div>
      </header>

      <main>
        <section className="intro">
          <div className="card">
            <div className="profile_img">
              <div className="img" />
            </div>
            <div className="profile_txt">
              <p>프론트엔드 개발자로 성장을 준비하는<br /> 퍼블리셔 <span>이가빈</span>입니다.</p>
              <a href="mailto:leegb0621@gmail.com" className='mail'>leegb0621@gmail.com</a>
              <a href="tel:010-0000-000" className='tel'>010-0000-0000</a>
              <a href='https://github.com/GabinLee' className='git'>https://github.com/GabinLee</a>
            </div>
          </div>
        </section>

        <section className="project">
          <div className="inner">
            <h1 className='section_title'><span>Project</span></h1>
            <ul className='project_list'>
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
                      <ul className='use_skill_list'>
                        {projectItem.skills.map((skillItem, index) => (
                          <li key={`skillItem${index}`}>
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
            </ul>
          </div>
        </section>
        
        <section className="career">
          <h1 className='section_title'><span>Career</span></h1>
          <ul>
            <li>
              <p>(주)조우네트웍스</p>
              <p>2021.09 ~ 2023.02</p>
            </li>
            <li>
              <p>JollyBeen</p>
              <p>2019.05 ~ 2022.06</p>
            </li>
          </ul>
        </section>
      </main>
    </Container>
  )
}