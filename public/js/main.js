document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const ninjaName = document.querySelector('input').value
    try{
        const response = await fetch(`/api/${ninjaName}`) //Local absolute path, don't use full absolute path (which was the link I had before)
        //For anything external, always use the full absolute path.
        const data = await response.json()

        console.log(data)
        document.querySelector('#real-name').innerText = data.realName
        document.querySelector('#origin').innerText = data.origin
        document.querySelector('#faction').innerText = data.faction
        document.querySelector('#sp-move').innerText = data.specialMove
        document.querySelector('#ninja-img').src = data.ninjaImage
    }catch(error){
        console.log(error)
    }
}