let line = document.querySelector('.cellLine')
let btnRight = document.querySelector('.btnRight')
let btnLeft = document.querySelector('.btnLeft')
let offset = 0

btnRight.addEventListener('click', function(){
offset -= 675
console.log(offset);
if(offset < -2700){
offset = 0
}
line.style.left = offset+ "px"
})

btnLeft.addEventListener('click', function(){
offset += 675
console.log(offset);
if(offset > 0){
offset = -2700
}
line.style.left = offset+ "px"
})