const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// ================= MOBILE MENU =================

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("open");

});


// Close menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("open");

  });

});


// ================= ACTIVE NAVIGATION =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navMenu a");


window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {

      current = section.getAttribute("id");

    }

  });


  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === `#${current}`
    ) {

      link.classList.add("active");

    }

  });

});


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e) {

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});