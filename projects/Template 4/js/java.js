const ele = document.getElementsByClassName("up")[0];

window.addEventListener("scroll" , () => {
    if (window.scrollY >= 500){
        ele.style.opacity = "1";
    }
    else{
        ele.style.opacity = "0";
    }
})

ele.addEventListener("click" , () => {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth"

        }
    )
})
