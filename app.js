


const $mobileDropDown = $(".mobile-ul-nav");
const $mobileHamburger = $("fa-bars");


const $newDiv = $("<div>").text("Hello World!!!");

$( () => {

    $(".fa-bars").on("click", () => {
        $(".mobile-ul-nav").toggleClass("hide");
        console.log("button was clicked");
    });
    $mobileHamburger.remove();
    $("body").append($newDiv);
})