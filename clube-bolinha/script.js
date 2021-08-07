

let varQuadrado = document.querySelector('.quadrado');
let div1 = document.querySelector('.invisible');
let div2 = document.querySelector('.invisible').nextSibling.nextSibling
let div3 = document.querySelector('.invisible').nextSibling.nextSibling.nextSibling.nextSibling
let div4 = document.querySelector('.invisible').nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
let div5 = document.querySelector('.invisible').nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
let div6 = document.querySelector('.invisible').nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling

function entrarDiv1(){
  div1.classList.remove('invisible');
}

function entrarDiv2(){
  div2.classList.remove('invisible');
}

function entrarDiv3(){
  div3.classList.remove('invisible');
}

function entrarDiv4(){
  div4.classList.remove('invisible');
}

function entrarDiv5(){
  div5.classList.remove('invisible');
}

function entrarDiv6(){
  div6.classList.remove('invisible');
}

function sair(){
  div1.classList.add('invisible');
  div2.classList.add('invisible');
  div3.classList.add('invisible');
  div4.classList.add('invisible');
  div5.classList.add('invisible');
  div6.classList.add('invisible');
}

varQuadrado.onmouseenter = entrarDiv1
div1.onmouseenter = entrarDiv2
div2.onmouseenter = entrarDiv3
div3.onmouseenter = entrarDiv4
div4.onmouseenter = entrarDiv5
div5.onmouseenter = entrarDiv6
div6.onmouseout = sair
// varQuadrado.onmouseout = sair
