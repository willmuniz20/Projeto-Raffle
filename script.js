const paragraph = document.querySelector(".new-paragraph")


function result() {

    const min = Math.ceil(document.querySelector('.input-text').value)
    const max = Math.floor(document.querySelector('.input-number').value)


    if (min >= max) {

        alert('O Valor Máximo Tem q Ser Maior q o Valor Mínimo')

        paragraph.innerHTML = resultaded
    }

    const resultaded = Math.floor(Math.random() * (max - min + 1)) + min;

    paragraph.innerHTML = resultaded

}









