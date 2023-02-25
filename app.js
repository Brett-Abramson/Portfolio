

//shows/hides dropdown menu
const mobileDropDown = () => {

    $(".fa-bars").on("click", () => {
    $(".menu-ul-nav").toggleClass("hide");
        // console.log("buttonw as clicked")
    });
}

// ======= why not working????
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
}
const displayResume = () => {
    checkHideClass($("#resume"));
    console.log("button clicked");
}
const displayProjects = () => {
    checkHideClass($("#projects"));
    console.log("button clicked");
}
const displayHome = () => {
    checkHideClass($("#home"));
    console.log("button clicked");
}
    
$("#home").toggleClass("hide");
$("#resume").toggleClass("hide");
$("#projects").toggleClass("hide");
$("#bio").toggleClass("hide");





$( () => {



    // shows/hides dropdown menu
    mobileDropDown();


    $("#li-bio-menu").on("click", displayBio);
    $("#li-resume-menu").on("click", displayResume);
    $("#li-projects-menu").on("click", displayProjects)
    $("#li-home-menu").on("click", displayHome);

})