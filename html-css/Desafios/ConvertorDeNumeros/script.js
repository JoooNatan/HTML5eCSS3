function converter() {
    var num = document.getElementById('txtn1')
    var res = document.getElementById('res')
    if (num.value.length == 0) {
        window.alert('Digite um numero')
    } else {
        num = Number(num.value)
        num = (num + (16*0))
        res.innerHTML += `${num}`
    }
}