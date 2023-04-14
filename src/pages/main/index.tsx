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
            <div className="profile_img">
              <div className="img" />
            </div>
            <div className="profile_txt">
              <p>프론트엔드 개발자로 성장을 준비하는<br /> 퍼블리셔 <span>이가빈</span>입니다.</p>
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