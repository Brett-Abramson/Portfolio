

//shows/hides dropdown menu
const mobileDropDown = () => {
    // $(".menu-ul-nav").toggleClass("hide");
    $("#hamburger-ul").slideToggle();
}

const checkHideClass = (selector) => {
    // const $bio = $("#bio");
    // const $home = $("#home");
    // const $resume = $("#resume");
    // const $projects = $("#projects");
    const $mains = [$("#bio"), $("#home"), $("#resume"), $("#projects")];
    for (let i = 0; i < $mains.length; i++) {
        if ($mains[i].hasClass("hide") !== true) {
            $mains[i].toggleClass("hide");
            // console.log($mains[i].get());
        }
    };
    if (selector.hasClass("hide") === true) {
       selector.toggleClass("hide");
        // console.log(true);
    };
}

const displayMobile = (btnClicked) => {
    mobileDropDown();
    checkHideClass(btnClicked);
}

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
    
}
    const swapImgs = () => {
        const $imgContainer = $("#homepage-pic");
        const $lightImage = $("<img>").attr("src","https://i.imgur.com/45gl6jy.jpg");
        const $darkImage = $("<img>").attr("src","https://i.imgur.com/z4AFBch.jpg");
        if ($imgContainer.hasClass("light-theme") === false) {
            $imgContainer.empty()
                .append($lightImage);
        } else {
            $imgContainer.empty()
            .append($darkImage);
        }
    }


$( () => {



    // shows/hides dropdown menu
    $(".fa-bars").on("click", mobileDropDown);

    // mobile: displays or hides website depending on "hide" class status
    $("#li-bio-dropdown").on("click", () => {displayMobile($("#bio"))});
    $("#li-resume-dropdown").on("click", () => {displayMobile($("#resume"))});
    $("#li-projects-dropdown").on("click", () => {displayMobile($("#projects"))});
    $("#li-home-dropdown").on("click", () => {displayMobile($("#home"))});
    // desktop: displays or hides website depending on "hide" class status
    $("#li-bio-menu").on("click", () => {checkHideClass($("#bio"))});
    $("#li-resume-menu").on("click", () => {checkHideClass($("#resume"))});
    $("#li-projects-menu").on("click", () => {checkHideClass($("#projects"))})
    $("#li-home-menu").on("click", () => {checkHideClass($("#home"))});

    $(".lightmode-btn").on("click", () => {lightMode($("body"))});

})



// ======= why not working???? ==== am i mixing vanilla JS and jQuery?? ====
// const displayPage = {
//     $home: $("#home"),
//     $bio: $("#bio"),
//     $resume: $("#resume"),
//     $projects: $("#projects"),
//     checkHideClass: (selector) => {
//         if (selector.hasClass("hide") === true) {
//             displayPage.$home.toggleClass("hide");
//             $("#bio").toggleClass("hide");
//             displayPage.$resume.toggleClass("hide");
//             displayPage.$projects.toggleClass("hide");
//             displayPage.console.log(true);
//         } else {
//             console.log(false);
//         }
//         console.log(selector.get());
//     },
//     displayBio: () => {
//         displayPage.checkHideClass(displayPage.$bio);
//         console.log("button clicked");
//     }
// }



// const displayBioMobile = () => {
//     checkHideClass($("#bio"));
//     console.log("button clicked");
//     mobileDropDown();
// }
// const displayResumeMobile = () => {
//     checkHideClass($("#resume"));
//     console.log("button clicked");
//     mobileDropDown();
// }
// const displayProjectsMobile = () => {
//     checkHideClass($("#projects"));
//     console.log("button clicked");
//     mobileDropDown();
// }
// const displayHomeMobile = () => {
//     checkHideClass($("#home"));
//     console.log("button clicked");
//     mobileDropDown();
// }
// const displayBio = () => {
//     checkHideClass($("#bio"));
//     console.log("button clicked");
// }
// const displayResume = () => {
//     checkHideClass($("#resume"));
//     console.log("button clicked");
//     $("#header-page-title").append($("<div>")).attr("id","ppagge").text("Resume");
// }
// const displayProjects = () => {
//     checkHideClass($("#projects"));
//     console.log("button clicked");
//     $("#header-page-title").append($("<div>")).text("Projects");
// }
// const displayHome = () => {
//     checkHideClass($("#home"));
//     console.log("button clicked");
// }   

// const display = (btnClicked) => {
//     checkHideClass(btnClicked);
// }

    // $("#li-bio-menu").on("click", displayBio);
    // $("#li-resume-menu").on("click", displayResume);
    // $("#li-projects-menu").on("click", displayProjects)
    // $("#li-home-menu").on("click", displayHome);