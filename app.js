
const mobileDropDown = () => {
  $("#hamburger-ul").slideToggle();
};

const checkHideClass = (selector) => {
  const $mains = [$("#bio"), $("#home"), $("#resume"), $("#projects")];
  for (let i = 0; i < $mains.length; i++) {
    if ($mains[i].hasClass("hide") !== true) {
      $mains[i].toggleClass("hide");
    }
  }
  if (selector.hasClass("hide") === true) {
    selector.toggleClass("hide");
  }
};

const displayMobile = (btnClicked) => {
  mobileDropDown();
  checkHideClass(btnClicked);
};

const lightMode = (selector) => {
  $(selector).toggleClass("light-theme");
  $(".top-header").toggleClass("light-theme");
  $(".nav-header").toggleClass("light-theme");
  $(".fa-brands").toggleClass("light-theme");
  $(".li-nav").toggleClass("light-theme");
  $(".li-nav a").toggleClass("light-theme");
  $("nav").toggleClass("light-theme");
  swapImgs();
  $("#homepage-pic").toggleClass("light-theme");
};

const swapImgs = () => {
  const $imgContainer = $("#homepage-pic");
  const $lightImage = $("<img>").attr("src", "https://i.imgur.com/45gl6jy.jpg");
  const $darkImage = $("<img>").attr("src", "https://i.imgur.com/z4AFBch.jpg");
  if ($imgContainer.hasClass("light-theme") === false) {
    $imgContainer.empty().append($lightImage);
  } else {
    $imgContainer.empty().append($darkImage);
  }
};

$(() => {
  // shows/hides dropdown menu
  $(".fa-bars").on("click", mobileDropDown);

  // mobile: displays or hides website depending on "hide" class status
  $("#li-bio-dropdown").on("click", () => {
    displayMobile($("#bio"));
  });
  $("#li-resume-dropdown").on("click", () => {
    displayMobile($("#resume"));
  });
  $("#li-projects-dropdown").on("click", () => {
    displayMobile($("#projects"));
  });
  $("#li-home-dropdown").on("click", () => {
    displayMobile($("#home"));
  });
  // desktop: displays or hides website depending on "hide" class status
  $("#li-bio-menu").on("click", () => {
    checkHideClass($("#bio"));
  });
  $("#li-resume-menu").on("click", () => {
    checkHideClass($("#resume"));
  });
  $("#li-projects-menu").on("click", () => {
    checkHideClass($("#projects"));
  });
  $("#li-home-menu").on("click", () => {
    checkHideClass($("#home"));
  });

  // Light-Mode <---> Dark-Mode
  $(".lightmode-btn").on("click", () => {
    lightMode($("body"));
  });
});
