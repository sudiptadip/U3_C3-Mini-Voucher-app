let form = document.querySelector('#form')
form.addEventListener('submit',myfunction)

function myfunction(){
event.preventDefault()

var obj = {

    name: form.name.value,
    email: form.email.value,
    address: form.address.value,
    amount: form.amount.value,
}

localStorage.setItem('user',JSON.stringify(obj))

 window.location.reload()

}