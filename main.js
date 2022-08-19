let plusBtns = document.querySelectorAll('.plus-btn')
console.log(plusBtns)
for(let i=0; i< plusBtns.length; i++){
    plusBtns[i].addEventListener('click', function(){
        plusBtns[i].previousElementSibling.value++
        totalPrice()
    })
}


    let minusBtns = document.querySelectorAll('.minus-btn')
console.log(minusBtns)
for(let i=0; i< minusBtns.length; i++){
    minusBtns[i].addEventListener('click', function(){
        if (minusBtns[i].nextElementSibling.value > 1){
            minusBtns[i].nextElementSibling.value-- 
            totalPrice()
        }
    })
}

let dlt = document.querySelectorAll('.delete')
console.log(dlt)
for(let i=0; i< dlt.length; i++){
    dlt[i].addEventListener('click', function(){
    dlt[i].parentNode.remove();
    })
    }

    let like = document.getElementsByClassName('fa-heart')
    console.log(like)
    for(let i=0; i< like.length; i++){
        like[i].addEventListener('click', function(){
        if (like[i].style.color==="rgb(158, 158, 158)")
        {
            like[i].style.color="red"
        }
        else{
            like[i].style.color="rgb(158, 158, 158)"
        }
        })
    }

    function totalPrice(){
        let sum = 0
        let Qts = document.querySelectorAll('.QNT')
        let prices = document.querySelectorAll('.price')

        for (let i = 0; i < Qts.length; i++){
        sum = sum + Qts[i].value * prices[i].innerHTML
        }
        document.querySelector('#finalPrice').value = sum
    }
    console.log(totalPrice)