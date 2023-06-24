import { useEffect, useState } from 'react';
import { Container } from './style';
import ProjectView from '../project';


export default function MainPage() {

  const [isScroll, setIsScroll] = useState(false)

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
            <div className="profile img">
              <div className="image" />
            </div>
            <div className="profile txt">
              <div className="introduce">
                <p>안녕하세요!</p>
                <p>퍼블리셔로 시작하여 개발자로 꾸준한 성장을 꿈꾸는</p>
                <p>신입 프론트엔드 개발자 <span>이가빈</span>입니다.</p>
              </div>
              <a href="mailto:leegb0621@gmail.com" className='mail'>leegb0621@gmail.com</a>
              <a href="tel:010-2790-5747" className='tel'>010-2790-5747</a>
              <a href='https://github.com/GabinLee' className='git'>https://github.com/GabinLee</a>
            </div>
          </div>

          <div className="wave">
            <div className="wave1"></div>
            <div className="wave2"></div>
            <div className="wave3"></div>
            <div className="wave4"></div>
          </div>
        </section>

        <ProjectView />

        <section className='skills'>
          <div className="inner">
            <h1 className='section_title'><span>Skills</span></h1>
            <ul>
              <li><p className='html'>HTML5</p></li>
              <li><p className='css'>CSS3</p></li>
              <li><p className='scss'>SCSS</p></li>
              <li><p className='react'>React</p></li>
              <li><p className='javascript'>JavaScript</p></li>
              <li><p className='typescript'>TypeScript</p></li>
            </ul>
            <div>
              <ul>
                <li><p className='xd'>Adobe Xd</p></li>
                <li><p className='figma'>Figma</p></li>
              </ul>
              <ul>
                <li><p className='zeplin'>Zeplin</p></li>
                <li><p className='git'>Github</p></li>
              </ul>
            </div>
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