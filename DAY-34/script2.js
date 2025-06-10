document.querySelector(".box").addEventListener("contextmenu",(e)=>{
    //her we learn the concept of bubbling and here we learn 
    // then we stop the bubbling concept with the help of immediatepropation 


   e.stopImmediatePropagation();
    alert("child was clicked")})
document.querySelector(".childbox").addEventListener("contextmenu",(e)=>{
    // and same us we apply this concept of all of the actionlistener
     e.stopImmediatePropagation();
    alert("childbox was clicked")})
document.querySelector(".container").addEventListener("contextmenu",(e)=>{
     e.stopImmediatePropagation();
    alert("container  was clicked")})