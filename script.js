async function getAnimal(){
    await updateURL(currentAnimal)
    data = await fetch(url);
    response = await data.json()
    console.log(response)
    document.getElementById('image').setAttribute('src', response[0].url)
    document.getElementById('image').style.width = '50%'
    document.getElementById('image').style.height = '50%'
}

async function refreshPicture(){
    document.getElementById('image').setAttribute('src', "assets/loading.gif")
    await updateURL(currentAnimal)
    data = await fetch(url);
    response = await data.json()
    console.log(response)
    document.getElementById('image').setAttribute('src', response[0].url)
    document.getElementById('image').style.width = '50%'
    document.getElementById('image').style.height = '50%'
}

async function catPress(){
    currentAnimal = 'cat'
    catElement = document.getElementById('catBut')
    dogElement = document.getElementById('dogBut')
    animalElement = document.getElementById('animal')

    catElement.style.backgroundColor = 'green'
    dogElement.style.backgroundColor = 'red'

    await updateURL(currentAnimal)

    animalElement.innerHTML = String(currentAnimal)
}

async function dogPress(){
    currentAnimal = 'dog'
    catElement = document.getElementById('catBut')
    dogElement = document.getElementById('dogBut')
    animalElement = document.getElementById('animal')

    catElement.style.backgroundColor = 'red'
    dogElement.style.backgroundColor = 'green'

    await updateURL(currentAnimal)

    animalElement.innerHTML = String(currentAnimal)
}

async function updateURL(currentAnimal){
    if(currentAnimal == 'cat'){
        await upcat();
        breed = catbreed
    } else if(currentAnimal == 'dog'){
        await updog()
        breed = dogbreed
    }else {
        breed = ''
    }
    url = 'https://api.the' + currentAnimal + 'api.com/v1/images/search?breed_ids=' + breed + '&api_key=live_uv6K2UsMNNq6ZCLhPmPIdemrwngaEVguxl8MvcO5bVKldlbQy4lp7hgTPc2qOY3Y'
    console.log(url)
    return url;
}

let data = ''
let currentAnimal = 'cat'




getAnimal()


async function upcat() {
    var select = document.getElementById('cat');
    var option = select.options[select.selectedIndex];
    console.log(option)
    document.getElementById('value').innerHTML = option.value;
    catbreed = option.value
}

upcat();


async function updog() {
    var select = document.getElementById('dog');
    var option = select.options[select.selectedIndex];
    console.log(option)
    document.getElementById('value').innerHTML = option.value;
    dogbreed = option.value
}


updog()