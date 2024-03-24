c=document.getElementById("c")
div=document.getElementById("/")
mul=document.getElementById("*")
min=document.getElementById("-")
plus=document.getElementById("+")
n1=document.getElementById("1")
n2=document.getElementById("2")
n3=document.getElementById("3")
n4=document.getElementById("4")
n5=document.getElementById("5")
n6=document.getElementById("6")
n7=document.getElementById("7")
n8=document.getElementById("8")
n9=document.getElementById("9")
n0=document.getElementById("0")
equ=document.getElementById("=")
del=document.getElementById("del")
point=document.getElementById(".")

input = document.querySelector('.input')

div.addEventListener("click", function(event){
    if(input.value !== '' & input.value.slice(-1) !== '/' & input.value.slice(-1) !== '*' & input.value.slice(-1) !== '-' & input.value.slice(-1) !== '+'){
        input.value+='/'
    }
        
})

mul.addEventListener("click", function(event) {
    if(input.value !== '' & input.value.slice(-1) !== '/' & input.value.slice(-1) !== '*' & input.value.slice(-1) !== '-' & input.value.slice(-1) !== '+'){
        input.value+='*'
    }

})
min.addEventListener("click", function(event) {
    if(input.value !== '' & input.value.slice(-1) !== '/' & input.value.slice(-1) !== '*' & input.value.slice(-1) !== '-' & input.value.slice(-1) !== '+'){
        input.value+='-'
    }

})
plus.addEventListener("click", function(event) {
    if(input.value !== '' & input.value.slice(-1) !== '/' & input.value.slice(-1) !== '*' & input.value.slice(-1) !== '-' & input.value.slice(-1) !== '+'){
        input.value+='+'
    }
})


n1.addEventListener("click", function(event) {
    input.value+='1'
})
n2.addEventListener("click", function(event) {
    input.value+='2'
})
n3.addEventListener("click", function(event) {
    input.value+='3'
})
n4.addEventListener("click", function(event) {
    input.value+='4'
})
n5.addEventListener("click", function(event) {
    input.value+='5'
})
n6.addEventListener("click", function(event) {
    input.value+='6'
})
n7.addEventListener("click", function(event) {
    input.value+='7'
})
n8.addEventListener("click", function(event) {
    input.value+='8'
})
n9.addEventListener("click", function(event) {
    input.value+='9'
})
n0.addEventListener("click", function(event) {
    input.value+='0'
})


equ.addEventListener("click", function(event) {
    input.value = eval(input.value)


})
c.addEventListener("click", function(event) {
    input.value =''
})

del.addEventListener("click", function(event) {
    input.value = input.value.substring(0, input.value.length - 1)
})
point.addEventListener("click", function(event) {
    input.value += '.'
})