/* view background gif when hovering over 'check out my work' */

$('.portfolio').mouseover(function() {
    b = document.getElementById("bg-gif");
    b.classList.remove("hidden");
});

$('.portfolio').mouseout(function() {
    b = document.getElementById("bg-gif");
    b.classList.add("hidden");
});
