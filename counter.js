const counterValue= document.getElementById("counterValue");
const decreaseBtn= document.getElementById("DeBTn")
const resetBtn= document.getElementById("ReBtn")
const increaseBtn= document.getElementById("InBtn")


function countBTN(count){
   if(count>0){
    counterValue.style.color="green";
   } else if(count<0){
    counterValue.style.color="red";
   } else{counterValue.style.color="black";}
   counterValue.innerText= count;
}

increaseBtn.addEventListener("click", function(){
    let counter= Number(counterValue.innerText)+1;
        countBTN(counter);
    
})

decreaseBtn.addEventListener("click",function(){
    let counter= Number(counterValue.innerText)-1;
    countBTN(counter)
})


resetBtn.addEventListener("click",function(){
    let counter= 0;
    countBTN(counter)
})

