//1
const regExp = /^\d+$/;//подсмотрел в интернете

const containsOnlyDigits = (str) => {
    return regExp.test(str)
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false 


//2
function interval(){
    console.log('sec')
}

setInterval(interval,1000)
