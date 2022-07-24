document.querySelector("#quizbody").style.display="none"
var startBtn = document.querySelector("#start-button")
startBtn.addEventListener("click", function(event){
    console.log(event.target)
    document.querySelector("#quizbody").style.display="block"
    document.querySelector("#diff").style.display="none"
})
var quiz=document.querySelector("#quizbody");
quiz.addEventListener("click", function(event){
    // console.log(event.target);
    if (event.target.matches(".answer"))
    {
        console.log(event.target);
        console.log(event.target.getAttribute("data-correct"));
    }
})