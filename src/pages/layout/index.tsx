import { useEffect, useState } from "react";
import { Container } from "./style";
import { Link, Outlet } from "react-router-dom";


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
          <Link to="/"><img src="images/gabeen_logo.png" alt="가빈" /></Link>
        </div>
      </header>

      <Outlet />
    </Container>
  )
}