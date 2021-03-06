let text = document.getElementById('header')
let date = new Date()
let minute = date.getMinutes()
let seconds = date.getSeconds()
let hours = date.getHours()

text.innerHTML = hours + ":" + minute + ":" + seconds

setInterval(()=>{
seconds++
console.log("good")
text.innerHTML = text.innerHTML = hours + ":" + minute + ":" + seconds
if(seconds>=60){
    minute++
    seconds = 0
}
if(minute>=60){
    hours++
    minute = 0
}
},1000)
