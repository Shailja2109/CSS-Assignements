//  Purpose: This file contains the JavaScript code for the CSS_ASSIGNMENT_5 project.   
    function Mobile_Nav_Toggler() {
        console.log("Pressed!!");
        var x = document.getElementsByClassName("mobile-menu")[0];
        if (x.style.display === "block" || x.style.display === "") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    } 
    // Add a closing curly brace here 
