function escrever(mensagem) {
  console.log(mensagem)
}

let dudu = `
  <div id="dudu">
    <button onclick="b2()">Dudu</button>
  <div>
`

let esta = `
  <div id="esta">
    <button onclick="b2()">Dudu</button>
    <button onclick="b3()">esta</button>
  <div>
`

let com = `
  <div id="com">
    <button onclick="b2()">Dudu</button>
    <button onclick="b3()">esta</button>
    <button onclick="b4()">com</button>
  <div>
`

let saudade = `
  <div id="saudade">
    <button onclick="b2()">Dudu</button>
    <button onclick="b3()">esta</button>
    <button onclick="b4()">com</button>
    <button onclick="b5()">saudade</button>
  <div>
`

let da = `
  <div id="da">
    <button onclick="b2()">Dudu</button>
    <button onclick="b3()">esta</button>
    <button onclick="b4()">com</button>
    <button onclick="b5()">saudade</button>
    <button onclick="b6()">da</button>
  <div>
`

let mel = `
  <div id="mel">
    <button onclick="b2()">Dudu</button>
    <button onclick="b3()">esta</button>
    <button onclick="b4()">com</button>
    <button onclick="b5()">saudade</button>
    <button onclick="b6()">da</button>
    <button onclick="b7()">Mel</button>
  <div>
`

let imagem = `
  <div id="imagem">
    <button onclick="b2()">Dudu</button>
    <button onclick="b3()">esta</button>
    <button onclick="b4()">com</button>
    <button onclick="b5()">saudade</button>
    <button onclick="b6()">da</button>
    <button onclick="b7()">Mel</button>
    <br><br>
    <img src="image.jpeg" width=300px>
  <div>
`

function b1() {
  document.querySelector('#botoes').innerHTML = dudu
}

function b2() {
  document.querySelector('#dudu').innerHTML = esta
}

function b3() {
  document.querySelector('#esta').innerHTML = com
}

function b4() {
  document.querySelector('#com').innerHTML = saudade
}

function b5() {
  document.querySelector('#saudade').innerHTML = da
}

function b6() {
  document.querySelector('#da').innerHTML = mel
}

function b7() {
  document.querySelector('#da').innerHTML = imagem
}

