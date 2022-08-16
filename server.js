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
        'specialMove': 'Spear Grab',
        'ninjaImage': 'https://www.denofgeek.com/wp-content/uploads/2019/05/mortal_kombat_scorpion_primary.jpg?resize=768%2C432'
    },
    'sub-zero':{
        'realName': 'Kuai Liang',
        'origin': 'Earthrealm',
        'faction': 'Lin Kuei Clan',
        'specialMove': 'Ice Blast',
        'ninjaImage': 'https://s3.amazonaws.com/primagames-prod-assets/_resized/images/news/mortal-kombat-x-subzero_big2.jpg_1200x500_.jpg'
    },
    'reptile':{
        'realName': 'Syzoth',
        'origin': 'Zaterra',
        'faction': 'Outworld Empire',
        'specialMove': 'Acid Spray',
        'ninjaImage': 'https://sm.ign.com/t/ign_in/articlepage/r/reptile-revealed-for-mortal-kombat-x-ign-first/reptile-revealed-for-mortal-kombat-x-ign-first_qgya.1280.jpg'
    },
    'ermac':{
        'realName': 'Ermac',
        'origin': 'Outworld',
        'faction': 'Outworld Empire',
        'specialMove': 'Telekinetic Slam',
        'ninjaImage': 'https://pbs.twimg.com/media/B83vOPSCYAAiZCJ.jpg:large'
    },
    'smoke':{
        'realName': 'Tomas Vrbada',
        'origin': 'Earthrealm',
        'faction': 'Lin Kuei Clan',
        'specialMove': 'Invisibility',
        'ninjaImage': 'https://pbs.twimg.com/media/ECG73DIWsAE5va5.jpg'
    },
    'cyrax':{
        'realName': 'Unknown',
        'origin': 'Earthrealm',
        'faction': 'Lin Kuei Clan',
        'specialMove': 'Energy Net',
        'ninjaImage': 'https://i1.wp.com/www.pcmrace.com/wp-content/uploads/2019/04/Mortal-Kombat-11-Cyrax.jpg?resize=750%2C400&ssl=1'
    },
    'sektor':{
        'realName': 'Unknown',
        'origin': 'Earthrealm',
        'faction': 'Lin Kuei Clan',
        'specialMove': 'Flamethrower',
        'ninjaImage': 'https://www.androidheadlines.com/wp-content/uploads/2020/05/Mortal-Kombat-11-Sektor.jpg'
    },
    'noob saibot':{
        'realName': 'Bi Han',
        'origin': 'Earthrealm',
        'faction': 'Independent',
        'specialMove': 'Teleport Slam',
        'ninjaImage': 'https://bloody-disgusting.com/wp-content/uploads/2019/03/noob.jpg'
    },
    'rain':{
        'realName': 'Unknown',
        'origin': 'Edenia',
        'faction': 'Shirai Ryu Clan',
        'specialMove': 'Hydro Ball',
        'ninjaImage': 'https://i.ytimg.com/vi/ih0mK-ixi-c/maxresdefault.jpg'
    },
    'kitana':{
        'realName': 'Kitana',
        'origin': 'Edenia',
        'faction': 'Edenian Resistance',
        'specialMove': 'Fan Throw',
        'ninjaImage': 'https://s3.amazonaws.com/primagames-prod-assets/_resized/images/news/mortal-kombat-x-kitana-and-kung-lao-gameplay-revealed-1421313280498.jpg_1200x500_.jpg'
    },
    'mileena':{
        'realName': 'Mileena',
        'origin': 'Outworld',
        'faction': 'Independent',
        'specialMove': 'Sai Blast',
        'ninjaImage': 'https://wallpaperaccess.com/full/6041115.jpg'
    },
    'jade':{
        'realName': 'Jade',
        'origin': 'Edenia',
        'faction': 'Edenian Resistance',
        'specialMove': 'Deadly Butterfly',
        'ninjaImage': 'https://i.pinimg.com/originals/52/ea/39/52ea3925e96acc319052b58e90efb444.jpg'
    },
    'tanya':{
        'realName': 'Tanya',
        'origin': 'Edenia',
        'faction': 'Brotherhood of Shadow',
        'specialMove': 'Surging Blast',
        'ninjaImage': 'http://images6.fanpop.com/image/photos/38600000/Tanya-Former-Edenian-and-traitor-of-Edenia-mortal-kombat-38691837-760-428.jpg'
    },
    'unknown':{
        'realName': 'Unknown',
        'origin': 'Unknown',
        'faction': 'Unknown',
        'specialMove': 'Unknown'
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
        response.json(ninjas['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}.`)
})