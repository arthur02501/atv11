function A(){
    const nome = document.querySelector('#nome').value;
    console.log(nome)
    const idade = document.querySelector('#idade').value;
    console.log(idade)
    const text = document.createElement('p')
    const textN = document.createTextNode(`Seu nome é: ${nome} sua idade é: ${idade}`)
    text.appendChild(textN)
    document.body.appendChild(text)
}