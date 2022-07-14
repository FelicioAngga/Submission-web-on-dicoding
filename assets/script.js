let burger = document.getElementById("burger");
burger.addEventListener("click", () =>{
    let sideBar = document.getElementById("sideBar");
    let slogan = document.getElementsByClassName("slogan");
    let jumboTron = document.getElementById("jumboTron");
    if(sideBar.style.display === "block"){
        for (let item of slogan){
            item.style.display = "block";
        }
        sideBar.style.animationName = "sideBarSlideOut";
        sideBar.style.animationPlayState = "running";
        document.body.style.overflowY = "auto";
        sideBar.onanimationend = () =>{
            sideBar.style.display = "none";
        }
        burger.setAttribute("src", "assets/burger.svg");
    }else{
        for (let item of slogan){
            item.style.display = "none";
        }
        sideBar.onanimationend = () =>{
            sideBar.style.display = "block";
        }
        sideBar.style.display = "block";
        sideBar.style.animationName = "sideBarSlideIn";
        sideBar.style.animationPlayState = "running";
        document.body.style.overflowY = "hidden";
        burger.setAttribute("src", "assets/close.svg");
    }
})

let dropdown = document.getElementById("container-dropdown");
let content = document.getElementsByClassName("dropdown-content");
dropdown.addEventListener("mouseover", () =>{
    content[0].style.display = "block";
});
dropdown.addEventListener("mouseleave", () =>{
    content[0].style.display = "none";
});
content[0].addEventListener("mouseleave", () =>{
    content[0].style.display = "none";
});

let collSideBarList = document.getElementsByClassName("sideBarList");
for(let e of collSideBarList){
    e.addEventListener("click", () =>{
        burger.click();
    });
}