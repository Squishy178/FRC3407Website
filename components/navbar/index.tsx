import type { NextComponentType } from "next";
import style from "../../styles/components/Navbar.module.scss";
import NavLink from "./link";
import Image from "next/image";
import { useRouter } from "next/router";

function profileClick() {
  console.log("omg you clicked the john!"); // this better make it into production
  let profileMenu = document.getElementById("profileMenu");
  if (profileMenu) {
    profileMenu.hidden = !profileMenu.hidden; // toggle the menu visibility
  } else {
    console.error("oh no");
  }
}

function mobileMenuClick() {
  let mobileNav=document.getElementById("mobileNav") as HTMLDivElement;
  if (mobileNav === null) {
    console.error("where the mobile nav go?");
    return;
  }
  // mobileNav.style.height= open ? "0%" : "fit-content";
  let open=mobileNav.style.display==="block";
  mobileNav.setAttribute('style', `display:${open?"none":"block"} !important`);
}

const Navbar: NextComponentType = () => {
  let router = useRouter();
  let path = router.pathname;
  return (
    <div>
      <div className={style.nav}>
        <div className={style.profilePictureContainer}>
          <div id="profileMenu" className={style.profileMenu} hidden>
            <h1>Menu</h1>
            <a href="#">calvin</a>
            <a href="#">is</a>
            <a href="#">epic</a>
          </div>
          <Image
            tabIndex={0}
            onClick={profileClick}
            src="/static/images/assets/johnl.jpg"
            alt="Profile picture"
            fill
            className={style.profilePicture}
          />
        </div>
        <h1>FRC Team 3407</h1>

        <nav className={style.desktop}>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/calendar">Calendar</NavLink>
          <NavLink href="/frc-resources">FRC Resources</NavLink>
          <NavLink href="/student-resources">Student Resources</NavLink>
        </nav>

        <button className={style.mobileMenu} onClick={mobileMenuClick}>
          <svg
            width={100}
            height={60}
            viewBox="0 0 20.458 15.875"
            xmlns="http://www.w3.org/2000/svg">
            <path
              style={{
                fill: "none",
                stroke: "#fff",
                strokeWidth: 1.32292,
                strokeLinecap: "round",
                strokeDasharray: "none",
                strokeOpacity: 1,
              }}
              d="M2.82 7.938h17M2.82 4.068h17M2.82 11.807h17"
            />
          </svg>
        </button>

        <nav style={{
          display: "none !important"
        }} className={style.mobile} id="mobileNav">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/calendar">Calendar</NavLink>
          <NavLink href="/frc-resources">FRC Resources</NavLink>
          <NavLink href="/student-resources">Student Resources</NavLink>
        </nav>
      </div>
      <div className={style.navBufferDiv} />
    </div>
  );
};

export default Navbar;
