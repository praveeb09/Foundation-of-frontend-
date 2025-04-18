const allLinks = document.querySelectorAll("a"); 
const menuBar = document.querySelector(".menu");
const menu = document.querySelector("nav ul");

document.addEventListener('DOMContentLoaded', function () {
    console.log('Frontend Resources Page Loaded');
});

allLinks.forEach(link => {

    if(link.href.includes("#")){
        return
    }else{ 
        link.setAttribute("target", "_blank");
    }
})

menuBar.addEventListener("click", showMenu = () => {
    menu.classList.toggle("show");

    document.querySelectorAll("nav ul li").forEach(li => {
        li.addEventListener("click", close = () =>{
            menu.classList.remove("show");
        })
    })
})