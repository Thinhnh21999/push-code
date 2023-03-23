function $(id) {
  return document.getElementById(id);
}

var navbarElement = document.querySelector(".navbar");
var navbarButton = document.querySelector(".navbar-toggler");
var navbarSupport = $("navbarSupport");
var styleSetting = $("style-setting");
var styleWitch = $("style-witch");
var scopllTopBtn = document.querySelector(".scropll-top-btn");
// var activeAbout = $("about");
// console.log(activeAbout);
// var linkScroll = document.querySelectorAll(".link-scroll");
// console.log(linkScroll);
// var owlDotElements = document.querySelectorAll(".owl-dot");

function windowScrolled() {
  // window.scrollY kiểm tra người dùng có scroll hay không
  if (window.scrollY !== 0) {
    navbarElement.classList.add("active");
    scopllTopBtn.classList.add("active");
  } else {
    navbarElement.classList.remove("active");
    scopllTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", windowScrolled);

// function handleScrollAbout() {
//   activeAbout = window.pageYOffset;
//   console.log(activeAbout);
// }

// window.addEventListener("scroll", handleScrollAbout);

function handleOnclickButton() {
  // .contains để kiểm tra phần tử này có chứa class active hay không
  if (navbarSupport.classList.contains("active")) {
    navbarSupport.classList.remove("active");
  } else {
    navbarSupport.classList.add("active");
  }
}

navbarButton.addEventListener("click", handleOnclickButton);

function handleOnclickSetting() {
  // tt toggle trong classlist kiểm tra và xoá | thêm class vào ptử
  styleWitch.classList.toggle("show");
}

styleSetting.addEventListener("click", handleOnclickSetting);

// function handleOnclick() {
//   var owlDotActive = document.getElementsByClassName("owl-dot");

//   if (owlDotActive !== null) {
//     console.log(owlDotActive);
//     for (index = 0; index < owlDotActive.length; index++) {
//       owlDotActive[index].setAttribute("class", "owl-dot");
//     }
//   }
//   this.setAttribute("class", "active owl-dot");
//   var activeIndex = this.getAttribute("data-index");
//   console.log(activeIndex);
//   renderTestimonials(activeIndex);
// }
// function renderTestimonials(activeIndex) {
//   var testimonialElements = document.querySelectorAll(
//     ".testimonials-group_item"
//   );
//   testimonialElements.forEach(function (item, index) {
//     console.log(index);
//     // ở đây ko dùng 3 dấu bằng vì 2 kiểu dữ liệu khác nhau.
//     if (index == activeIndex) {
//       item.setAttribute("class", "testimonials-group_item active");
//     } else {
//       item.setAttribute("class", "testimonials-group_item");
//     }
//   });
// }

// owlDotElements.forEach(function (item) {
//   item.addEventListener("click", handleOnclick);
// });
