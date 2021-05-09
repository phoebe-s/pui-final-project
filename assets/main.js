/* view background gif when hovering over 'check out my work' */

/* gif appears upon hovering over text */
$('.portfolio').mouseover(function() {
    b = document.getElementById("bg-gif");
    b.classList.remove("hidden");
});

/* gif disappears after hovering away from text */
$('.portfolio').mouseout(function() {
    b = document.getElementById("bg-gif");
    b.classList.add("hidden");
});
