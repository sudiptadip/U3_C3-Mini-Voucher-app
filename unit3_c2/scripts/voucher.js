var obj = JSON.parse(localStorage.getItem('user'))

var h3 = document.querySelector('#wallet_balance')
h3.innerText = obj.amount;

async function serch(){ 
url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
let res = await fetch(url)
let data = await res.json()
fun(data["0"]['vouchers'])
}

serch()

function fun(arr){

    let box = document.querySelector('#voucher_list')

   arr.forEach(function(elem){

    let div = document.createElement('div')
    div.setAttribute('class','voucher')


    let img = document.createElement('img')
    img.src = elem.image

    let h31 = document.createElement('h3')
    h31.innerText=elem.name

    let price = document.createElement('h3')
    price.innerText=elem.price

    let btn = document.createElement('button')
    btn.innerText='Buy'
    btn.setAttribute('id','buy_voucher')
    btn.addEventListener('click',function(){
        hello(elem)
    })

    div.append(img,h31,price,btn)
    box.append(div)

    })

    var x = JSON.parse(localStorage.getItem('purchase')) || [] ;

    function hello(elem){

        if(Number(obj.amount) >= Number(elem.price)){
        x.push(elem)
        localStorage.setItem('purchase',JSON.stringify(x))
        obj.amount = Number(obj.amount) - Number(elem.price)
        localStorage.setItem('user',JSON.stringify(obj))
        h3.innerText = obj.amount;
        alert("Hurray! purchase successful")    
    }else{
        alert("Sorry! insufficient balance")
    }
    }
}


