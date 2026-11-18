let btn = document.querySelector("#btn");
let prj = document.querySelector(".ProjectGrid");

btn.addEventListener("click", () =>{
    if(prj.style.display === 'none') {
       prj.style.display = 'grid'; 
    } else{
       prj.style.display = 'none';
    }
})