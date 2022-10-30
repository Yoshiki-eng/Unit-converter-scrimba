/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('input')
const lengthEl = document.getElementById('length')
const volumeEl = document.getElementById('volume')
const massEl = document.getElementById('mass')
const btnEl = document.getElementById('btn')
const btnResetEl = document.getElementById('btn-reset')

btnEl.addEventListener('click', function(){
    
    let value = inputEl.value;
    lengthEl.innerHTML = `<h2>Length (Meter/Feet)</h2>`
    volumeEl.innerHTML = `<h2>Volume (Liters/Gallons)</h2>`
    massEl.innerHTML = `<h2>Mass (Kilogram/Pounds)</h2>`
    
    lengthConvert(value)
    volumeConvert(value)
    massConvert(value)
    
})

btnResetEl.addEventListener('click', function(){
    lengthEl.innerHTML = `<h2>Length (Meter/Feet)</h2>`
    volumeEl.innerHTML = `<h2>Volume (Liters/Gallons)</h2>`
    massEl.innerHTML = `<h2>Mass (Kilogram/Pounds)</h2>`
})


function lengthConvert(num){
    let feet = (num * 3.281).toFixed(3);
    let meters = (num / 3.281).toFixed(3)
    lengthEl.innerHTML += `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
}

function volumeConvert(num){
    let gallons = (num * 0.264).toFixed(3);
    let liters = (num / 0.264).toFixed(3);
    volumeEl.innerHTML += `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
}


function massConvert(num){
    let pounds = (num * 2.204).toFixed(3);
    let kilograms = (num / 2.2204).toFixed(3)
    massEl.innerHTML += `${num} kilogram = ${pounds} feet | ${num} pounds = ${kilograms} kilograms`
}