document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const ninjaName = document.querySelector('input').value
    try{
        const response = await fetch(`https://mk-ninja-api.herokuapp.com/api/${ninjaName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#real-name').innerText = data.realName
        document.querySelector('#origin').innerText = data.origin
        document.querySelector('#faction').innerText = data.faction
        document.querySelector('#sp-move').innerText = data.specialMove
    }catch(error){
        console.log(error)
    }
}