import { useEffect, useState } from "react";
import { Container } from "./style";
import { Outlet } from "react-router-dom";


export default function LayoutPage() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  });

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
          <a href="/"><img src="images/gabeen_logo.png" alt="가빈" /></a>
        </div>
      </header>

      <Outlet />
    </Container>
  )
}