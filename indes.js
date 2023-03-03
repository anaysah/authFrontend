var spans = document.querySelectorAll(".menuButton");

for (var i = 0; i < spans.length; i++) {
  spans[i].addEventListener("click", function(event) {
    // Code to execute when the span is clicked
    // alert("You clicked span number " + (i+1));

    event.target.style.backgroundColor = "#1C0D1B";
    event.target.style.filter = "blur(0px)";
    // event.target.style.transform = "scale(0.8)";
    
    let button = event.target.innerText;


    if(button=="Sign Up"){
        var otherBtn = document.querySelector("#loginBtn");
        var mainBox = document.querySelector("#signupBox");
        var otherBox = document.querySelector("#loginBox");
        
    }else if(button=="Log In"){
        var otherBtn = document.querySelector("#signupBtn");
        var mainBox = document.querySelector("#loginBox");
        var otherBox = document.querySelector("#signupBox");
        // otherBtn.style.backgroundColor = "#2a2b38";
    }

    mainBox.style.display = "block";
    otherBox.style.display = "none";
    console.log(otherBtn)
    otherBtn.style.backgroundColor = "#2a2b38";
    otherBtn.style.filter = "blur(2px)";
    
    // otherBtn.classList.add("blur"); /* Add the "blur" class to the div */

  });
}