var img=document.getElementById("img")
var nameText=document.getElementById("name")
var closee=document.getElementById("closee")
var contact=document.getElementById("contact")
img.onclick=function(){
    nameText.style.display="block"
    closee.style.display="block"
    contact.style.backgroundColor="black"
    contact.style.transation="all 3s"
    // nameText.style.transation="all 3s"
    // closee.style.transation="all 3s"
}
img.onmouseover=function(){
    img.style.cursor="pointer"
}
closee.onclick=function(){
    closee.style.display="none"
    nameText.style.display="none"
    contact.style.backgroundColor="transparent"
    contact.style.transation="all 3s"
}
closee.onmouseover=function(){
    closee.style.cursor="pointer"
    
}