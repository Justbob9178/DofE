async function get(){
    data = await fetch('https://api.thedogapi.com/v1/breeds');
    response = await data.json()
    for (var i = 0; i < response.length; i++) { 
        //console.log(response[i]);
        job = response[i]
        console.log('<option value="' + job.id + '">' + job.name + '</option>')
    }
}

get()