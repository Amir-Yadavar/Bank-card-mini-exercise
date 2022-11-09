let $ = document
let inputNumberElem = $.querySelector('form:nth-of-type(1)>input:nth-of-type(1)')
let cardNumber = $.querySelector('.card>section:nth-of-type(2)>span')
let inputNameElem = $.querySelector('form:nth-of-type(1)>input:nth-of-type(2)')
let cardName = $.querySelector('.card>section:nth-of-type(3)>span:nth-of-type(1)')
let inputYearElem = $.querySelector('form:nth-of-type(2)>input:nth-of-type(1)')
let inputMonthElem = $.querySelector('form:nth-of-type(2)>input:nth-of-type(2)')
let inputCvvElem = $.querySelector('form:nth-of-type(2)>input:nth-of-type(3)')
let cardYear = $.querySelector('.card>section:nth-of-type(3)>span:nth-of-type(3)>span:nth-of-type(1)')
let cardMonth = $.querySelector('.card>section:nth-of-type(3)>span:nth-of-type(3)>span:nth-of-type(2)')
let cardCvv = $.querySelector('.card>section:nth-of-type(3)>span:nth-of-type(2)')
let submitElem = $.getElementsByTagName('button')

inputNumberElem.addEventListener('keyup', function (e) {
    temp = e.target.value
    temp = temp.substring(temp.length - 1, temp.length)
    cardNumber.innerHTML += temp

    if (((e.target.value).length == 4) ||
        ((e.target.value).length == 8) ||
        ((e.target.value).length == 12)) {
        cardNumber.innerHTML += '-'
    }


    if (e.which === 8) {
        temp = e.target.value
        cardNumber.innerHTML = temp
    }

    if (((e.target.value).length >= 16)) {
        inputNameElem.focus()
    }

})


inputNameElem.addEventListener('keyup', function (e) {
    tempName = e.target.value
    tempName = tempName.substring(tempName.length - 1, tempName.length)
    cardName.innerHTML += tempName

    if (e.which === 8) {
        tempName = e.target.value
        cardName.innerHTML = tempName
    }

    if (((e.target.value).length >= 20)) {
        inputYearElem.focus()
    }
})

inputYearElem.addEventListener('keyup', function (e) {
    tempYear = e.target.value
    tempYear = tempYear.substring(tempYear.length - 1, tempYear.length)
    cardYear.innerHTML += tempYear

    if (e.which === 8) {
        tempYear = e.target.value
        cardYear.innerHTML = tempYear
    }

    if (((e.target.value).length >= 2)) {
        inputMonthElem.focus()
    }
})

inputMonthElem.addEventListener('keyup', function (e) {
    tempMonth = e.target.value
    tempMonth = tempMonth.substring(tempMonth.length - 1, tempMonth.length)
    cardMonth.innerHTML += tempMonth

    if (e.which === 8) {
        tempMonth = e.target.value
        cardMonth.innerHTML = tempMonth
    }

    if (((e.target.value).length >= 2)) {
        inputCvvElem.focus()
    }
})

inputCvvElem.addEventListener('keyup', function (e) {
    tempCvv = e.target.value
    tempCvv = tempCvv.substring(tempCvv.length - 1, tempCvv.length)
    cardCvv.innerHTML += tempCvv

    if (e.which === 8) {
        tempCvv = e.target.value
        cardCvv.innerHTML = tempCvv
    }

    if (((e.target.value).length >= 4)) {
        inputCvvElem.blur()
    }
})

submitElem[0].addEventListener('click', () => {


    if (inputNumberElem.value === '' ||
        inputNameElem.value === '' ||
        inputYearElem.value === '' ||
        inputMonthElem.value === '' ||
        inputCvvElem.value === '') {
        alert('Your Data Is Empty ')
    } else {
        inputNumberElem.value = ''
        inputNameElem.value = ''
        inputYearElem.value = ''
        inputMonthElem.value = ''
        inputCvvElem.value = ''
        cardNumber.innerHTML = ''
        cardName.innerHTML = ''
        cardYear.innerHTML = ''
        cardMonth.innerHTML = ''
        cardCvv.innerHTML = ''
    }


})