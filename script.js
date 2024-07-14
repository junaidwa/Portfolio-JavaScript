const icon= document.querySelector(".icon-btn");
const navbarv= document.querySelector(".navbar");
const cross= document.querySelector(".navbar .icon-c");

icon.addEventListener('click',()=>{
    navbarv.classList.add("junaid");
})
cross.addEventListener('click',()=>{
    navbarv.classList.remove("junaid");
})
