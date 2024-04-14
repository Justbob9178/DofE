async function refreshPicture(){
    document.getElementById('image').setAttribute('src', "assets/loading.gif")
    await updateURL(currentAnimal)
    data = await fetch(await updateURL(currentAnimal));
    response = await data.json()
    useme = response[0]
    console.log(useme)
    document.getElementById('breed').innerHTML = 'breed : ' + useme.breeds[0].name
    document.getElementById('weight').innerHTML = 'weight : ' + useme.breeds[0].weight.metric + ' kg'
    document.getElementById('life-span').innerHTML = 'life span : ' + useme.breeds[0].life_span + ' years'
    document.getElementById('origin').innerHTML = 'country of origin : ' + useme.breeds[0].origin
    //console.log(response)
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

    //animalElement.innerHTML = String(document.getElementById('breedname').innerHTML) + String(currentAnimal)
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
    upcat()
    updog()
    if(document.getElementById('breedid').innerHTML && document.getElementById('catbreedbutton').checked){
        breedid = document.getElementById('breedid').innerHTML
        query = 'breed_ids=' + breedid + '&'
    } else query = ''

    console.log(query)
    let url = 'https://api.the' + currentAnimal + 'api.com/v1/images/search?' + query + 'has_breeds=1&api_key=live_uv6K2UsMNNq6ZCLhPmPIdemrwngaEVguxl8MvcO5bVKldlbQy4lp7hgTPc2qOY3Y'
    console.log(url)
    return url;
}

let data = ''
let currentAnimal = 'cat'




refreshPicture()


async function upcat() {
    var select = document.getElementById('cat');
    var option = select.options[select.selectedIndex];
    console.log(select)
    document.getElementById('breedid').innerHTML = option.value;
}

upcat();


async function updog() {
    var select = document.getElementById('dog');
    var option = select.options[select.selectedIndex];
    console.log(select)
    document.getElementById('breedid').innerHTML = option.value;
    document.getElementById('breedname').innerHTML = String(select)
}


updog()