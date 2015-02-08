$(".main-cat").toggleClass("show");

$(".main-cat").click(function(){
if ($(this).parent().hasClass("show")) {
    $("dropdown").addClass("show").children(".dropdown").hide("medium");;
    $(this).parent().toggleClass("show").children(".dropdown").slideToggle("medium");
   
    }

else {
    $(this).parent().toggleClass("show").children(".dropdown").slideToggle("medium");
   
    }
});

$(".drop-main-cat").toggleClass("show");

$(".drop-main-cat").click(function(){
if ($(this).parent().hasClass("show")) {
    $("dropdown-child").addClass("show").children(".dropdown-child").hide("medium");;
    $(this).parent().toggleClass("show").children(".dropdown-child").slideToggle("medium");

    }

else {
    $(this).parent().toggleClass("show").children(".dropdown-child").slideToggle("medium");
    }
});