const cards = document.getElementById('cards')
const cardsQ = document.getElementById('cardsQ')
const cardsF = document.getElementById('cardsF')
const cardsT = document.getElementById('cardsT')
const cardsC = document.getElementById('cardsC')

const selected = () => {
    const valor = cardsQ.value
    if (valor == 'qCommon') {
        const parametQ = 'common'
        qualitie(parametQ)
        console.log(valor)
    } else if (valor == 'qFree') {
        const parametQ = 'free'
        qualitie(parametQ)
        console.log(valor)
    } else if (valor == 'qRare') {
        const parametQ = 'rare'
        qualitie(parametQ)
        console.log(valor)
    } else if (valor == 'qEpic') {
        const parametQ = 'epic'
        qualitie(parametQ)
        console.log(valor)
    } else if (valor == 'qLegendary') {
        const parametQ = 'legendary'
        qualitie(parametQ)
        console.log(valor)
    }
    const tvalor = cardsT.value
    if (tvalor == 'hero') {
        const parametT = 'hero'
        type(parametT)
        console.log(tvalor)
    } else if (tvalor == 'minion') {
        const parametT = 'minion'
        type(parametT)
        console.log(tvalor)
    } else if (tvalor == 'spell') {
        const parametT = 'spell'
        type(parametT)
        console.log(tvalor)
    } else if (tvalor == 'weapon') {
        const parametT = 'weapon'
        type(parametT)
        console.log(tvalor)
    } else if (tvalor == 'enchantment') {
        const parametT = 'enchantment'
        type(parametT)
        console.log(tvalor)
    } else if (tvalor == 'hero-power') {
        const parametT = 'hero-power'
        type(parametT)
        console.log(tvalor)
    }
    const fvalor = cardsF.value
    if (fvalor == 'neutral') {
        const parametF = 'neutral'
        factions(parametF)
        console.log(fvalor)
    } else if (fvalor == 'horde') {
        const parametF = 'horde'
        factions(parametF)
        console.log(fvalor)
    } else if (fvalor == 'alliance') {
        const parametF = 'alliance'
        factions(parametF)
        console.log(fvalor)
    }
    const cvalor = cardsC.value
    if (cvalor == 'death-knight') {
        const parametC = 'death-knight'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'druid') {
        const parametC = 'druid'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'mage') {
        const parametC = 'mage'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'paladin') {
        const parametC = 'paladin'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'priest') {
        const parametC = 'priest'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'hunter') {
        const parametC = 'hunter'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'rogue') {
        const parametC = 'rogue'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'shaman') {
        const parametC = 'shaman'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'warlock') {
        const parametC = 'warlock'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'warrior') {
        const parametC = 'warrior'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'neutral') {
        const parametC = 'neutral'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'dream') {
        const parametC = 'dream'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'whizbang') {
        const parametC = 'whizbang'
        classes(parametC)
        console.log(cvalor)
    } else if (cvalor == 'demon-hunter') {
        const parametC = 'demon-hunter'
        classes(parametC)
        console.log(cvalor)
    }
}

async function qualitie(parametQ){
    cards.innerHTML += ``
    const qualitieRota = await fetch (`http://localhost:3000/qualities/${parametQ}`)
    const listQualitie = await qualitieRota.json()
    listQualitie.map((itenQualitie) => {
        if (itenQualitie.img){
            const boxqualitie =`
                <div class="card">
                    <img class='card-img' src='${itenQualitie.img}'>
                </div>`

            cards.innerHTML += boxqualitie
        }
    })
}

async function type(parametT){
    cards.innerHTML += ``
    const typeRota = await fetch (`http://localhost:3000/types/${parametT}`)
    const listType = await typeRota.json()
    listType.map((itenType) => {
        if (itenType.img){
            const boxType =`
                <div class="card">
                    <img class='card-img' src='${itenType.img}'>
                </div>`

            cards.innerHTML += boxType
        }
    })
}

async function factions(parametF){
    cards.innerHTML += ``
    const factionRota = await fetch (`http://localhost:3000/factions/${parametF}`)
    const listFaction = await factionRota.json()
    listFaction.map((itenFaction) => {
        if (itenFaction.img){
            const boxFaction =`
                <div class="card">
                    <img class='card-img' src='${itenFaction.img}'>
                </div>`

            cards.innerHTML += boxFaction
        }
    })
}

async function classes(parametC){
    cards.innerHTML += ``
    const classesRota = await fetch (`http://localhost:3000/classes/${parametC}`)
    const listClass = await classesRota.json()
    listClass.map((itenClass) => {
        if (itenClass.img){
            const boxClass =`
                <div class="card">
                    <img class='card-img' src='${itenClass.img}'>
                </div>`

            cards.innerHTML += boxClass
        }
    })
}
