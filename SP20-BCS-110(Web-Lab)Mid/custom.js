    // Rameez Ashraf

window.onload = function() {
    // Do all bindings here
    var img= document.getElementById("bnd");
    console.log("v1")
    img.onclick= message;
};

// This function will creale new list on click button
function message(){
    console.log("Verify");
    alert("You try to open the logo");
}