import { useEffect, useState } from "react";
import { Container, ContentMobile } from "./MenuHamburguerStyles";
import { TiThMenu } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";

export function MenuHamburguer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const handleResize = () => {
    if(window.innerWidth > 768 && !menuOpen) {
      setMenuOpen(true)
    }
    if(window.innerWidth < 426 && menuOpen) {
      setMenuOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [menuOpen])
  

  return (
    <Container>
      <ContentMobile onClick={toggleMenu}>
        {menuOpen ? <IoCloseSharp color="white" /> : <TiThMenu color="white" />}
      </ContentMobile>
        {menuOpen || window.innerWidth > 768 ?  <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Services</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">Client</a></li>
        <li><a href="/">Contact</a></li>
      </ul> : <></>}
    </Container>
  );
}
