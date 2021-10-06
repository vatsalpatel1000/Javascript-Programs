var number = document.getElementById('number')
var list = document.getElementById('list')
var result = document.getElementById('result')
var values = []

function appendList() {
    if(isNumber(number.value) && !isInList(number.value, values)) {
    values.push(Number(number.value))
    let item = document.createElement('option')
    item.text = `Value ${number.value} added`
    list.appendChild(item)
    result.innerHTML = ''
    } else {
    window.alert('Error! Invalid Value or Value already in the list.')
    }
    number.value = ''
    number.focus()
}

function finish() {
    if(values.length == 0) {
    window.alert('Error! Add Values before finish.')
    } else {
    let total = values.length
    var bigger = values[0]
    var smaller = values[0]
    var sum = 0
    for(let index in values) {
        sum += values[index]
        if(values[index] > bigger) bigger = values[index]
        if(values[index] < smaller) smaller = values[index]
    }
    let average = sum / total
    result.innerHTML = ''
    result.innerHTML += `<p>In total we have ${total} numbers registered.</p>`
    result.innerHTML += `<p>The highest reported value is ${bigger}.</p>`
    result.innerHTML += `<p>The lowest reported value is ${smaller}.</p>`
    result.innerHTML += `<p>Adding up all the values, we got ${sum}.</p>`
    result.innerHTML += `<p>The average of reported values is ${average}.</p>`
    }
}

function isNumber(numberval) {
    if(Number(numberval) >= 1 && Number(numberval) <= 100) return true 
    else return false
}

function isInList(numberval, array) {
    if(array.indexOf(Number(numberval)) != -1) return true
    else return false
}