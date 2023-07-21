const move = document.getElementById("movement");
function handler(){
    move.style.border="2px solid black";
}
move.addEventListener("mouseenter",handler);
move.addEventListener("mouseleave",()=>{
    move.style.border="none";
});

move.addEventListener("click",()=>{
    move.style.border="2px solid pink";
});

const chesse = document.getElementById("chesse");
const cheeseHide=document.getElementById("cheeseHide");
const main=document.getElementById("hideMe");
const imgs=document.getElementsByTagName("img");
const hideMe=document.getElementById("hidden_main");
for (let i = 0;i<imgs.length;i++){
    imgs[i].addEventListener("mouseenter",(event)=>{
        imgs[i].style.backgroundColor="purple";
    });
}
chesse.addEventListener("click",()=>{
    main.style.display="none";
    chesse.style.display="none";
    hideMe.style.display="block";
    cheeseHide.style.display="flex";
    cheeseHide.style.justifyContent="center";
    cheeseHide.style.flexDirection="column";
});
chesse.addEventListener("mouseenter",()=>{
    chesse.style.backgroundColor="rgb(230, 190,250)";
});
chesse.addEventListener("mouseleave",()=>{
    chesse.style.backgroundColor="rgb(255, 238,222)";
});

cheeseHide.addEventListener("mouseenter",()=>{
    cheeseHide.style.backgroundColor="rgb(230, 190,250)";
});

cheeseHide.addEventListener("mouseleave",()=>{
    cheeseHide.style.backgroundColor="rgb(255, 238,222)";
})

cheeseHide.addEventListener("click",()=>{
    main.style.display="block";
    chesse.style.display="block";
    cheeseHide.style.display="none";
    hideMe.style.display="none";
});