let x=document.querySelector("#menu-icon");
let y=document.querySelector(".rightmenu");

x.onclick=()=>{
    x.classList.toggle("bx-bx");
    y.classList.toggle("open");

}