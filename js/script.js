var btn = document.querySelector('#btn-hidden')
var hiddenCon = document.querySelector('.hidden')

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

btn.addEventListener("click", () =>{
    if (hiddenCon.style.display == "block"){
        hiddenCon.style.display = "none";
    }else {
        hiddenCon.style.display = "block";
    }
})






















