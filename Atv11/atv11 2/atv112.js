function A(){
    const n1 = document.querySelector('#n1').value;
    console.log(n1)
    const n2 = document.querySelector('#n2').value;
    console.log(n2)
    const valor = parseInt(n1) + parseInt(n2)
    const text = document.createElement('p')
    const textN = document.createTextNode(`O valor da soma é ${valor}`)
    text.appendChild(textN)
    document.body.appendChild(text)
}