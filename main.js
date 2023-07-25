let bubles = document.querySelectorAll(".buble");
var rate;
for(let buble of bubles){
    buble.addEventListener("click",function(){
        bubles.forEach(function (element) {
            if (element !== buble) {
              element.classList.remove("active");
            }
          });
        this.classList.toggle("active");
        rate=this.textContent;
        document.querySelector(".nbr").textContent=rate;
    })
}
let submitBtn=document.querySelector("#submit");

submitBtn.addEventListener("click",function(){
    document.querySelector(".submit-container").style.visibility='hidden';
    document.querySelector(".thanks-container").style.visibility='visible';
})