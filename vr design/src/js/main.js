let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
let header = document.querySelector("header");

menu.onclick = ()=> {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("on-active");
}
window.onscroll = ()=> {
    if(header.scrollY> 100){
        header.classList.addclass("active");
    }
    else{
        header.classList.remove("active");

    }
}
let submit = document.getElementById("submit");
submit.onclick= ()=> {
    alert("thank you for your message")
}