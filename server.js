const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000

app.use(cors())
app.use(express.static('public'))



const ninjas = {
    'scorpion':{
        'realName': 'Hanzo Hasashi',
        'origin': 'Earthrealm',
        'faction': 'Shirai Ryu Clan',
        'specialMove': 'Spear Grab'
    },
    'sub-zero':{
        'realName': 'Kuai Liang',
        'origin': 'Earthrealm',
        'faction': 'Lin Kuei Clan',
        'specialMove': 'Ice Blast'
    },
    'reptile':{
        'realName': 'Syzoth',
        'origin': 'Zaterra',
        'faction': 'Outworld Empire',
        'specialMove': 'Acid Spray'
    },
    'ermac':{
        'realName': 'Ermac',
        'origin': 'Outworld',
        'faction': 'Outworld Empire',
        'specialMove': 'Telekinetic Slam'
    },
    'smoke':{
        'realName': 'Tomas Vrbada',
        'origin': 'Earthrealm',
        'faction': 'Lin Kuei Clan',
        'specialMove': 'Invisibility'
    },
    'cyrax':{
        'realName': 'Unknown',
        'origin': 'Earthrealm',
        'faction': 'Lin Kuei Clan',
        'specialMove': 'Energy Net'
    },
    'sektor':{
        'realName': 'Unknown',
        'origin': 'Earthrealm',
        'faction': 'Lin Kuei Clan',
        'specialMove': 'Flamethrower'
    },
    'noob saibot':{
        'realName': 'Bi Han',
        'origin': 'Earthrealm',
        'faction': 'Shirai Ryu Clan',
        'specialMove': 'Spear Grab'
    },
    'rain':{
        'realName': 'Unknown',
        'origin': 'Edenia',
        'faction': 'Shirai Ryu Clan',
        'specialMove': 'Hydro Ball'
    },
    'kitana':{
        'realName': 'Kitana',
        'origin': 'Edenia',
        'faction': 'Edenian Resistance',
        'specialMove': 'Fan Throw'
    },
    'mileena':{
        'realName': 'Mileena',
        'origin': 'Outworld',
        'faction': 'Independent',
        'specialMove': 'Sai Blast'
    },
    'jade':{
        'realName': 'Jade',
        'origin': 'Edenia',
        'faction': 'Edenian Resistance',
        'specialMove': 'Deadly Butterfly'
    },
    'tanya':{
        'realName': 'Tanya',
        'origin': 'Edenia',
        'faction': 'Brotherhood of Shadow',
        'specialMove': 'Surging Blast'
    },
    'unknown':{
        'realName': 'Tanya',
        'origin': 'Edenia',
        'faction': 'Brotherhood of Shadow',
        'specialMove': 'Surging Blast'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:ninjaName', (request, response) => {
    const ninjasName = request.params.ninjaName.toLowerCase()
    if (ninjas[ninjasName]) {
        response.json(ninjas[ninjasName])
    } else {
        response.json(rappers['unknown'])
    }
})

app._router.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}.`)
})