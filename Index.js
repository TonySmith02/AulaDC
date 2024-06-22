console.log("test")
async function carregarUsuarios() {
    const requestOptions = {
        method: "GET"
    };


    const response = await fetch("https://rickandmortyapi.com/api/character", requestOptions)
    const data = await response.json()

    const personagens = data.results

    personagens.map((personagem) => {
        console.log(personagem.name);
    })




    let container = document.getElementById('container')

    personagens.map((personagem) => {

        const div = document.createElement('div')
        const image = document.createElement('img')
        image.src = personagem.image



        const gender = document.createElement('p')
        gender.innerHTML = personagem.gender

        const name = document.createElement('p')
        name.innerHTML = personagem.name

        div.appendChild(image)

        div.appendChild(name)
        div.appendChild(gender)
        container.appendChild(div)
    })
};

carregarUsuarios()
