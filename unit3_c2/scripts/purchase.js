 var arr = JSON.parse(localStorage.getItem('purchase'))

 var obj = JSON.parse(localStorage.getItem('user'))
 
 var balance = document.querySelector('#balance')
 balance.innerText = obj.amount;


//  console.log(arr)

 fun(arr)

function fun(arr){

    let box = document.querySelector('#purchased_vouchers')

   arr.forEach(function(elem){

    let div = document.createElement('div')

    let img = document.createElement('img')
    img.src = elem.image

    let h31 = document.createElement('h3')
    h31.innerText=elem.name

    let price = document.createElement('h3')
    price.innerText=elem.price

    div.append(img,h31,price)
    box.append(div)
})
}