

//shows/hides dropdown menu
const mobileDropDown = () => {
    $(".menu-ul-nav").toggleClass("hide");
}

const checkHideClass = (selector) => {
    const $bio = $("#bio");
    const $home = $("#home");
    const $resume = $("#resume");
    const $projects = $("#projects");
    const $mains = [$bio, $home, $resume, $projects];
    for (let i = 0; i < $mains.length; i++) {
        if ($mains[i].hasClass("hide") !== true) {
            $mains[i].toggleClass("hide");
            console.log($mains[i].get());
        }
    };
    if (selector.hasClass("hide") === true) {
       selector.toggleClass("hide");
        console.log(true);
    };
}

const displayBio = () => {
    checkHideClass($("#bio"));
    console.log("button clicked");
    mobileDropDown();
}
const displayResume = () => {
    checkHideClass($("#resume"));
    console.log("button clicked");
    mobileDropDown();
}
const displayProjects = () => {
    checkHideClass($("#projects"));
    console.log("button clicked");
    mobileDropDown();
}
const displayHome = () => {
    checkHideClass($("#home"));
    console.log("button clicked");
    mobileDropDown();
}
    





$( () => {



    // shows/hides dropdown menu
    $(".fa-bars").on("click", mobileDropDown);

    // displays or hides website depending on "hide" class status
    $("#li-bio-menu").on("click", displayBio);
    $("#li-resume-menu").on("click", displayResume);
    $("#li-projects-menu").on("click", displayProjects)
    $("#li-home-menu").on("click", displayHome);

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