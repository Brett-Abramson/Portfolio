

//shows/hides dropdown menu
const mobileDropDown = () => {

    $(".fa-bars").on("click", () => {
    $(".menu-ul-nav").toggleClass("hide");
        console.log("buttonw as clicked")
    });
}



const $newDiv = $("<div>").text("Hello World!!!");

$( () => {
    // shows/hides dropdown menu
    mobileDropDown();

    $("body").append($newDiv);
})