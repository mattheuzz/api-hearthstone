const cards = document.getElementById('cards')
const cardsQ = document.getElementById('cardsQ')
const cardsF = document.getElementById('cardsF')
const cardsT = document.getElementById('cardsT')

const selected = () => {
    const valor = cardsQ.value
    if (valor == 'qCommon') {
        qCommon()
        console.log(valor)
    } else if (valor == 'qFree') {
        qFree()
        console.log(valor)
    } else if (valor == 'qRare') {
        qRare()
        console.log(valor)
    } else if (valor == 'qEpic') {
        qEpic()
        console.log(valor)
    } else if (valor == 'qLegendary') {
        qLegendary()
        console.log(valor)
    }
    const tvalor = cardsT.value
    if (tvalor == 'hero') {
        tHero()
        console.log(tvalor)
    } else if (tvalor == 'minion') {
        tMinion()
        console.log(tvalor)
    } else if (tvalor == 'spell') {
        tSpell()
        console.log(tvalor)
    } else if (tvalor == 'weapon') {
        tWeapon()
        console.log(tvalor)
    } else if (tvalor == 'enchantment') {
        tEnchantment()
        console.log(tvalor)
    } else if (tvalor == 'hero-power') {
        tHeroPower()
        console.log(tvalor)
    }
}

async function qFree(){
    cards.innerHTML += ``
    const qualitieFree = await fetch ('http://localhost:3000/qualities/free')
    const free = await qualitieFree.json()
    free.map((itenFree) => {
        if (itenFree.img){
            const boxfree =`
                <div class="card">
                    <img class='card-img' src='${itenFree.img}'>
                </div>`

            cards.innerHTML += boxfree
        }
    })
}

async function qCommon(){
    cards.innerHTML += ``
    const qualitieCommon = await fetch ('http://localhost:3000/qualities/common')
    const common = await qualitieCommon.json()
    common.map((itemCommon) => {
        if (itemCommon.img){
            const boxCommon =`
                <div class="card">
                    <img class='card-img' src='${itemCommon.img}'>
                </div>`

            cards.innerHTML += boxCommon
        }
    })
}

async function qRare(){
    cards.innerHTML += ``
    const qualitieRare = await fetch ('http://localhost:3000/qualities/rare')
    const rare = await qualitieRare.json()
    rare.map((itenRare) => {
        if (itenRare.img){
            const boxrare =`
                <div class="card">
                    <img class='card-img' src='${itenRare.img}'>
                </div>`

            cards.innerHTML += boxrare
        }
    })
}

async function qEpic(){
    cards.innerHTML += ``
    const qualitieEpic = await fetch ('http://localhost:3000/qualities/epic')
    const epic = await qualitieEpic.json()
    epic.map((itenEpic) => {
        if (itenEpic.img){
            const boxEpic =`
                <div class="card">
                    <img class='card-img' src='${itenEpic.img}'>
                </div>`

            cards.innerHTML += boxEpic
        }
    })
}

async function qLegendary(){
    cards.innerHTML += ``
    const qualitieLegendary = await fetch ('http://localhost:3000/qualities/legendary')
    const legendary = await qualitieLegendary.json()
    legendary.map((itenLegendary) => {
        if (itenLegendary.img){
            const boxLegendary =`
                <div class="card">
                    <img class='card-img' src='${itenLegendary.img}'>
                </div>`

            cards.innerHTML += boxLegendary
        }
    })
}

async function tHero(){
    cards.innerHTML += ``
    const typeHero = await fetch ('http://localhost:3000/types/hero')
    const hero = await typeHero.json()
    hero.map((itenHero) => {
        if (itenHero.img){
            const boxHero =`
                <div class="card">
                    <img class='card-img' src='${itenHero.img}'>
                </div>`

            cards.innerHTML += boxHero
        }
    })
}

async function tMinion(){
    cards.innerHTML += ``
    const typeMinion = await fetch ('http://localhost:3000/types/minion')
    const minion = await typeMinion.json()
    minion.map((itenMinion) => {
        if (itenMinion.img){
            const boxMinion =`
                <div class="card">
                    <img class='card-img' src='${itenMinion.img}'>
                </div>`

            cards.innerHTML += boxMinion
        }
    })
}

async function tSpell(){
    cards.innerHTML += ``
    const typeSpell = await fetch ('http://localhost:3000/types/spell')
    const spell = await typeSpell.json()
    spell.map((itenSpell) => {
        if (itenSpell.img){
            const boxSpell =`
                <div class="card">
                    <img class='card-img' src='${itenSpell.img}'>
                </div>`

            cards.innerHTML += boxSpell
        }
    })
}

async function tEnchantment(){
    cards.innerHTML += ``
    const typeEnchantment = await fetch ('http://localhost:3000/types/enchantment')
    const enchantment = await typeEnchantment.json()
    enchantment.map((itenEnchantment) => {
        if (itenEnchantment.img){
            const boxEnchantment =`
                <div class="card">
                    <img class='card-img' src='${itenEnchantment.img}'>
                </div>`

            cards.innerHTML += boxEnchantment
        }
    })
}

async function tWeapon(){
    cards.innerHTML += ``
    const typeWeapon = await fetch ('http://localhost:3000/types/weapon')
    const weapon = await typeWeapon.json()
    weapon.map((itenWeapon) => {
        if (itenWeapon.img){
            const boxWeapon =`
                <div class="card">
                    <img class='card-img' src='${itenWeapon.img}'>
                </div>`

            cards.innerHTML += boxWeapon
        }
    })
}

async function tHeroPower(){
    cards.innerHTML += ``
    const typeHeroPower = await fetch ('http://localhost:3000/types/hero-power')
    const heroPower = await typeHeroPower.json()
    heroPower.map((itenHeroPower) => {
        if (itenHeroPower.img){
            const boxHeroPower =`
                <div class="card">
                    <img class='card-img' src='${itenHeroPower.img}'>
                </div>`

            cards.innerHTML += boxHeroPower
        }
    })
}


