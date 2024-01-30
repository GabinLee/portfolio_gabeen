import { useEffect, useRef, useState } from 'react';
import { Container } from './style';
import ProjectView from '../project';


export default function MainPage() {
  const introRef = useRef<HTMLParagraphElement>(null);
  const [introHeight, setIntroHegiht] = useState(-1);
  const [lineBreak, setLineBreak] = useState(true);


  useEffect(() => {
    if(introRef.current === null) return;

    const observer = new ResizeObserver((entries, observer) => {
      for (let entry of entries) {
        const { height } = entry.contentRect;
        console.log('height', height);
        setIntroHegiht(height);
      }
    });

    observer.observe(introRef.current);
  }, []);

  useEffect(() => {
    if(introHeight > 60) {
      setLineBreak(false);
    } else {
      setLineBreak(true);
    }
  }, [introHeight]);


  return (
    <Container>
      <section className="intro">
        <div className="card">
          <div className="profile img">
            <div className="image" />
          </div>
          <div className="profile txt">
            <div className="introduce">
              <p>안녕하세요!</p>
              <p ref={introRef}>퍼블리셔로 시작하여 개발자로 꾸준한 성장을 꿈꾸는 {lineBreak && <br/>}5년차 퍼블리셔, 신입 프론트엔드 개발자 <span>이가빈</span>입니다.</p>
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

      <section className='skills inner'>
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
      </section>

      <section className="career inner">
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
    </Container>
  )
}