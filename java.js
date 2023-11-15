let flex = document.querySelector('.how')
let gamqarali = document.querySelector('.gamqrali')
let isari = document.querySelector('.isari')
console.log(flex.innerHTML)

flex.addEventListener('click', () => {
    gamqarali.classList.toggle('act')
    flex.classList.toggle('sh')
    isari.classList.toggle('am')
})

let what = document.querySelector('.what')
let fle = document.querySelector('.fle')
let gamqaral = document.querySelector('.gamqral')
let isar = document.querySelector('.isar')

fle.addEventListener('click', () => {
    gamqaral.classList.toggle('act')
    fle.classList.toggle('sh')
    isar.classList.toggle('am')
})

let wha = document.querySelector('.wha')
let fl = document.querySelector('.fl')
let gamqara = document.querySelector('.gamqra')
let isa = document.querySelector('.isa')


fl.addEventListener('click', () => {
    gamqara.classList.toggle('act')
    fl.classList.toggle('sh')
    isa.classList.toggle('am')
})

let wh = document.querySelector('.wh')
let f = document.querySelector('.f')
let gamqar = document.querySelector('.gamqr')
let is = document.querySelector('.is')

f.addEventListener('click', () => {
    gamqar.classList.toggle('act')
    f.classList.toggle('sh')
    is.classList.toggle('am')
})

let w = document.querySelector('.w')
let l = document.querySelector('.l')
let gamqa = document.querySelector('.gamq')
let i = document.querySelector('.i')

l.addEventListener('click', () => {
    gamqa.classList.toggle('act')

    i.classList.toggle('am')
    l.classList.toggle('a')
})

