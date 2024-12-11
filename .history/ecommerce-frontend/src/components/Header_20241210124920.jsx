import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useViewport } from "react-viewport-hooks";
import { useContext } from "react";

export function Header() {
  const { vw } = useViewport();

  let prevScrollPos = window.scrollY;
    const { cartCount } = useContext(QuantityContext);
  // const isMobile = useMediaQuery("max-width: 500px");
  const navLinksRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (vw <= 500) {
      menuRef.current.style.display = "block";
      navLinksRef.current.style.display = "none";
    } else {
      menuRef.current.style.display = "none";
      navLinksRef.current.style.display = "block";
    }
  }, [vw]);

  function handleVisibility() {
    if (vw <= 500) {
      if (menuRef.current.style.display === "block") {
        navLinksRef.current.style.display = "block";
        navLinksRef.current.classList.add("slide-in");
        navLinksRef.current.classList.remove("slide-out");

        menuRef.current.classList.add("slide-out");
        menuRef.current.classList.remove("slide-in");

        setTimeout(() => {
          menuRef.current.style.display = "none";
        }, 300);
      } else {
        menuRef.current.classList.add("slide-in");
        menuRef.current.classList.remove("slide-out");

        navLinksRef.current.classList.add("slide-out");
        navLinksRef.current.classList.remove("slide-in");

        setTimeout(() => {
          navLinksRef.current.style.display = "none";
          menuRef.current.style.display = "block";
        }, 300);
      }
    }
  }

  window.onscroll = function () {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
      document.querySelector(".headerContainer").style.top = "25px";
    } else {
      document.querySelector(".headerContainer").style.top = "-80px";
    }
    prevScrollPos = currentScrollPos;
  };

  return (
    <>
      <header className="headerContainer">
        <h1 className="headText">
          <span className="shopText">ShopRyt</span>

          <NavLink to="shop">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>cart-outline</title>
              <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
            </svg>
          </NavLink>
        </h1>

        <div className="navContainer">
          <svg
            ref={menuRef}
            onClick={handleVisibility}
            className="menuSvg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title></title>
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
          <div
            onClick={handleVisibility}
            ref={navLinksRef}
            className="subNavContainer"
          >
            <nav
              className="navLinks"
              onClick={handleVisibility}
              // onClick={handleVisibility}
              // ref={navLinksRef}
            >
              <NavLink to="/" onClick={handleVisibility}>
                Home
              </NavLink>
              <div className="shopCartContainer">
                <NavLink to="productList" onClick={handleVisibility}>
                  Shop
                </NavLink>
                <NavLink to="productList" onClick={handleVisibility}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title></title>
                    <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                  </svg>
                </NavLink>
                <span className="cartNumber">{cartCount}</span>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
