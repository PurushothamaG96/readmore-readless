const btn = document.getElementById("btn")
const container = document.getElementsByClassName("container")

btn.addEventListener("click", function(){
    if(btn.innerText=== "Show More"){
        btn.innerText = "Show Less"
        container[0].classList.toggle("show-less")
    }
    else{
        btn.innerText = "Show More"
        container[0].classList.toggle("show-less")
    }
})