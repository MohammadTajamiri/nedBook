let li=document.getElementsByTagName("li");

for (let i=0;i<=li.length;i++){
    li[i].addEventListener("mouseover",function(){
        li[i].style.color="black";
    })
}
li[1].style.backgroundColor="red";
li[1].addEventListener("click",function(element){
   element.style.backgroundColor="black";
})