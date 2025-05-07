import "./styles.css";
import linkedinIcon from "./icons/linkedin-in-brands.svg";
import instagramIcon from "./icons/instagram-brands.svg";
import githubIcon from "./icons/github-brands.svg";
import mobileIcon from "./icons/mobile.svg";
import mailIcon from "./icons/email.svg";

document.querySelectorAll(".linkedin").forEach((el) => {
  el.src = linkedinIcon;
});

document.querySelectorAll(".instagram").forEach((el) => {
  el.src = instagramIcon;
});

document.querySelectorAll(".github").forEach((el) => {
  el.src = githubIcon;
});

document.querySelector(".mobile").src = mobileIcon;
document.querySelector(".email").src = mailIcon;

// load background orange light on scroll
window.addEventListener("scroll", () => {
  const section2 = document.querySelector(".bg-light-2");
  const section3 = document.querySelector(".bg-light-3");
  const section4 = document.querySelector(".footer-container");
  const position2 = section2.getBoundingClientRect().top;
  const position4 = section4.getBoundingClientRect().top;
  if (position2 < window.innerHeight * 0.5) {
    section2.classList.add("active");
  }

  if (position4 < window.innerHeight * 0.75) {
    section3.classList.add("active");
  }
});

// load background blue light on page load
window.addEventListener("DOMContentLoaded", () => {
  const section1 = document.querySelector(".bg-light");
  setTimeout(() => {
    section1.classList.add("active");
  }, 100);
});
