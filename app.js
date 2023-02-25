

//shows/hides dropdown menu
const mobileDropDown = () => {

    $(".fa-bars").on("click", () => {
    $(".menu-ul-nav").toggleClass("hide");
        console.log("buttonw as clicked")
    });
}

const displayBio = () => {
    $(".home").addClass("hide");
    // $(".resume").toggleClass("hide");
    // $(".projects").toggleClass("hide");
    $(".bio").toggleClass("hide")
    console.log("button clicked");
}





$( () => {
    // shows/hides dropdown menu
    mobileDropDown();


    $("#li-bio-menu").on("click", displayBio);
})