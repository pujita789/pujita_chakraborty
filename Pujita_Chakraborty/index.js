// const sections = document.querySelectorAll(".section");
// const secBtns = document.querySelectorAll(".controlls");
// const secBtn = document.querySelectorAll(".controll");
// const allSections = document.querySelector(".main-section");

// function PageTransitions() {
//   for (let i = 0; i < secBtn.length; i++) {
//     secBtn[i].addEventListener("click", function () {
//       let currBtn = document.querySelectorAll(".activeBtn");
//       currBtn[0].className = currBtn[0].className.replace(".activeBtn", "");
//       this.className += "activeBtn";
//     });
//   }
//   allSections.addEventListener("click", (e) => {
//     const id = e.target.dataset.id;
//     if (id) {
//       secBtns.forEach((btn) => {
//         btn.classList.remove("active");
//       });
//       e.target.classList.add("active");
//       //hide other sectios

//       sections.forEach((section) => {
//         section.classList.remove("active");
//       });
//       const element = document.getElementById(id);
//       element.classList.add("active");
//     }
//   });
// }
// PageTransitions();

(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();
