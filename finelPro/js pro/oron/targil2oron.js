let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let suum;
let bottoms;
let total;
let sum
let sum1
let sum2
let sum3
function newfill() {
    setTimeout(function () {
        document.getElementById('total').value = ' '
        document.getElementById('bottoms').innerText = ' '
    }, 1000)
}
let changeBtn = document.getElementById('changeBtn').addEventListener('click', () => {
    document.getElementById('changeBtn').innerText = 'change numbers'
    num1.innerText = Math.floor((Math.random() * 10) + 1)
    num2.innerText = Math.floor((Math.random() * 10) + 1)
    sum = Number(num1.innerText) + Number(num2.innerText);
    sum1 = Number(num1.innerText) - Number(num2.innerText);
    sum2 = Number(num1.innerText) * Number(num2.innerText);
    sum3 = Number(num1.innerText) / Number(num2.innerText);
})
let btn = document.getElementById('btn').addEventListener('click', () => {
    suum = document.getElementById('suum').value
    bottoms = document.getElementById('bottoms');
    total = document.getElementById('total').value;
    if (total == sum && suum === '+' || total == sum1 && suum === '-' || total == sum2 && suum === '*' || total == sum3 && suum === '/') {
        bottoms.innerText = 'good job'

    }
    else {
        bottoms.innerText = 'try agin'

    }
    newfill()

})







