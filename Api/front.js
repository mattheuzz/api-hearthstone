const cards = document.getElementById('cards')
const cardsQ = document.getElementById('cardsQ')
const cardsF = document.getElementById('cardsF')
const cardsT = document.getElementById('cardsT')
const cardsC = document.getElementById('cardsC')
const qtd = document.getElementById('qtd')

const selected = () => {
    const valor = cardsQ.value
    const valorqtd = qtd.value
    if (valor == 'qCommon') {
        if (valorqtd == '0'){
            const parametRout = 'qualities'
            const parametQ = 'common'
            sourch(parametRout, parametQ, 0)
            console.log(valor)
        } else if (valorqtd == '30'){
            const parametRout = 'qualities'
            const parametQ = 'common'
            sourch(parametRout, parametQ, 30)
            console.log(valor)
        } else if (valorqtd == '60'){
            const parametRout = 'qualities'
            const parametQ = 'common'
            sourch(parametRout, parametQ, 60)
            console.log(valor)
        } else if (valorqtd == '90'){
            const parametRout = 'qualities'
            const parametQ = 'common'
            sourch(parametRout, parametQ, 90)
            console.log(valor)
        }

    } else if (valor == 'qFree') {
        if (valorqtd == '0'){
            const parametRout = 'qualities'
            const parametQ = 'free'
            sourch(parametRout, parametQ, 0)
            console.log(valor)
        } else if (valorqtd == '30'){
            const parametRout = 'qualities'
            const parametQ = 'free'
            sourch(parametRout, parametQ, 30)
            console.log(valor)
        } else if (valorqtd == '60'){
            const parametRout = 'qualities'
            const parametQ = 'free'
            sourch(parametRout, parametQ, 60)
            console.log(valor)
        } else if (valorqtd == '90'){
            const parametRout = 'qualities'
            const parametQ = 'free'
            sourch(parametRout, parametQ, 90)
            console.log(valor)
        }

    } else if (valor == 'qRare') {
        if (valorqtd == '0'){
            const parametRout = 'qualities'
            const parametQ = 'rare'
            sourch(parametRout, parametQ, 0)
            console.log(valor)
        } else if (valorqtd == '30'){
            const parametRout = 'qualities'
            const parametQ = 'rare'
            sourch(parametRout, parametQ, 30)
            console.log(valor)
        } else if (valorqtd == '60'){
            const parametRout = 'qualities'
            const parametQ = 'rare'
            sourch(parametRout, parametQ, 60)
            console.log(valor)
        } else if (valorqtd == '90'){
            const parametRout = 'qualities'
            const parametQ = 'rare'
            sourch(parametRout, parametQ, 90)
            console.log(valor)
        }

    } else if (valor == 'qEpic') {
        if (valorqtd == '0'){
            const parametRout = 'qualities'
            const parametQ = 'epic'
            sourch(parametRout, parametQ, 0)
            console.log(valor)
        } else if (valorqtd == '30'){
            const parametRout = 'qualities'
            const parametQ = 'epic'
            sourch(parametRout, parametQ, 30)
            console.log(valor)
        } else if (valorqtd == '60'){
            const parametRout = 'qualities'
            const parametQ = 'epic'
            sourch(parametRout, parametQ, 60)
            console.log(valor)
        } else if (valorqtd == '90'){
            const parametRout = 'qualities'
            const parametQ = 'epic'
            sourch(parametRout, parametQ, 90)
            console.log(valor)
        }
    } else if (valor == 'qLegendary') {
        if (valorqtd == '0'){
            const parametRout = 'qualities'
            const parametQ = 'legendary'
            sourch(parametRout, parametQ, 0)
            console.log(valor)
        } else if (valorqtd == '30'){
            const parametRout = 'qualities'
            const parametQ = 'legendary'
            sourch(parametRout, parametQ, 30)
            console.log(valor)
        } else if (valorqtd == '60'){
            const parametRout = 'qualities'
            const parametQ = 'legendary'
            sourch(parametRout, parametQ, 60)
            console.log(valor)
        } else if (valorqtd == '90'){
            const parametRout = 'qualities'
            const parametQ = 'legendary'
            sourch(parametRout, parametQ, 90)
            console.log(valor)
        }
    }


    const tvalor = cardsT.value
    if (tvalor == 'hero') {
        if (valorqtd == '0'){
            const parametRout = 'types'
            const parametT = 'hero'
            sourch(parametRout, parametT, 0)
            console.log(tvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'types'
            const parametT = 'hero'
            sourch(parametRout, parametT, 30)
            console.log(tvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'types'
            const parametT = 'hero'
            sourch(parametRout, parametT, 60)
            console.log(tvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'types'
            const parametT = 'hero'
            sourch(parametRout, parametT, 90)
            console.log(tvalor)
        }

    } else if (tvalor == 'minion') {
        if (valorqtd == '0'){
            const parametRout = 'types'
            const parametT = 'minion'
            sourch(parametRout, parametT, 0)
            console.log(tvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'types'
            const parametT = 'minion'
            sourch(parametRout, parametT, 30)
            console.log(tvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'types'
            const parametT = 'minion'
            sourch(parametRout, parametT, 60)
            console.log(tvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'types'
            const parametT = 'minion'
            sourch(parametRout, parametT, 90)
            console.log(tvalor)
        }

    } else if (tvalor == 'spell') {
        if (valorqtd == '0'){
            const parametRout = 'types'
            const parametT = 'spell'
            sourch(parametRout, parametT, 0)
            console.log(tvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'types'
            const parametT = 'spell'
            sourch(parametRout, parametT, 30)
            console.log(tvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'types'
            const parametT = 'spell'
            sourch(parametRout, parametT, 60)
            console.log(tvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'types'
            const parametT = 'spell'
            sourch(parametRout, parametT, 90)
            console.log(tvalor)
        }

    } else if (tvalor == 'weapon') {
        if (valorqtd == '0'){
            const parametRout = 'types'
            const parametT = 'weapon'
            sourch(parametRout, parametT, 0)
            console.log(tvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'types'
            const parametT = 'weapon'
            sourch(parametRout, parametT, 30)
            console.log(tvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'types'
            const parametT = 'weapon'
            sourch(parametRout, parametT, 60)
            console.log(tvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'types'
            const parametT = 'weapon'
            sourch(parametRout, parametT, 90)
            console.log(tvalor)
        }

    } else if (tvalor == 'enchantment') {
        if (valorqtd == '0'){
            const parametRout = 'types'
            const parametT = 'enchantment'
            sourch(parametRout, parametT, 0)
            console.log(tvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'types'
            const parametT = 'enchantment'
            sourch(parametRout, parametT, 30)
            console.log(tvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'types'
            const parametT = 'enchantment'
            sourch(parametRout, parametT, 60)
            console.log(tvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'types'
            const parametT = 'enchantment'
            sourch(parametRout, parametT, 90)
            console.log(tvalor)
        }

    } else if (tvalor == 'hero-power') {
        if (valorqtd == '0'){
            const parametRout = 'types'
            const parametT = 'hero-power'
            sourch(parametRout, parametT, 0)
            console.log(tvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'types'
            const parametT = 'hero-power'
            sourch(parametRout, parametT, 30)
            console.log(tvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'types'
            const parametT = 'hero-power'
            sourch(parametRout, parametT, 60)
            console.log(tvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'types'
            const parametT = 'hero-power'
            sourch(parametRout, parametT, 90)
            console.log(tvalor)
        }
}


    const fvalor = cardsF.value
    if (fvalor == 'neutral') {
        if (valorqtd == '0'){
            const parametF = 'neutral'
            const parametRout = 'factions'
            sourch(parametRout, parametF, 0)
            console.log(fvalor)
        } else if (valorqtd == '30'){
            const parametF = 'neutral'
            const parametRout = 'factions'
            sourch(parametRout, parametF, 30)
            console.log(fvalor)
        } else if (valorqtd == '60'){
            const parametF = 'neutral'
            const parametRout = 'factions'
            sourch(parametRout, parametF, 60)
            console.log(fvalor)
        } else if (valorqtd == '90'){
            const parametF = 'neutral'
            const parametRout = 'factions'
            sourch(parametRout, parametF, 90)
            console.log(fvalor)
        }

    } else if (fvalor == 'horde') {
        if (valorqtd == '0'){
            const parametRout = 'factions'
            const parametF = 'horde'
            sourch(parametRout, parametF, 0)
            console.log(fvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'factions'
            const parametF = 'horde'
            sourch(parametRout, parametF, 30)
            console.log(fvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'factions'
            const parametF = 'horde'
            sourch(parametRout, parametF, 60)
            console.log(fvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'factions'
            const parametF = 'horde'
            sourch(parametRout, parametF, 90)
            console.log(fvalor)
        }

    } else if (fvalor == 'alliance') {
        if (valorqtd == '0'){
            const parametRout = 'factions'
            const parametF = 'alliance'
            sourch(parametF, parametRout, 0)
            console.log( fvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'factions'
            const parametF = 'alliance'
            sourch(parametRout, parametF, 30)
            console.log(fvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'factions'
            const parametF = 'alliance'
            sourch(parametRout, parametF, 60)
            console.log(fvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'factions'
            const parametF = 'alliance'
            sourch(parametRout, parametF, 90)
            console.log(fvalor)
        }
    }

    const cvalor = cardsC.value
    if (cvalor == 'death-knight') {
        if (valorqtd == '0'){    
            const parametRout = 'classes'
            const parametC = 'death-knight'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){    
            const parametRout = 'classes'
            const parametC = 'death-knight'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){    
            const parametRout = 'classes'
            const parametC = 'death-knight'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){    
            const parametRout = 'classes'
            const parametC = 'death-knight'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }
    
    } else if (cvalor == 'druid') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'druid'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'druid'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'druid'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'druid'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }

    } else if (cvalor == 'mage') {
        if (valorqtd == '0'){    
            const parametRout = 'classes'
            const parametC = 'mage'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){    
            const parametRout = 'classes'
            const parametC = 'mage'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){    
            const parametRout = 'classes'
            const parametC = 'mage'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){    
            const parametRout = 'classes'
            const parametC = 'mage'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }
    
    } else if (cvalor == 'paladin') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'paladin'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'paladin'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'paladin'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'paladin'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }
    
    } else if (cvalor == 'priest') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'priest'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'priest'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'priest'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'priest'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }

    } else if (cvalor == 'hunter') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'hunter'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'hunter'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'hunter'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'hunter'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }

    } else if (cvalor == 'rogue') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'rogue'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'rogue'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'rogue'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'rogue'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }

    } else if (cvalor == 'shaman') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'shaman'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'shaman'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'shaman'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'shaman'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }

    } else if (cvalor == 'warlock') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'warlock'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'warlock'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'warlock'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'warlock'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }
    
    } else if (cvalor == 'warrior') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'warrior'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'warrior'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'warrior'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'warrior'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }

    } else if (cvalor == 'neutral') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'neutral'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'neutral'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'neutral'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'neutral'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }

    } else if (cvalor == 'dream') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'dream'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'dream'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'dream'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'dream'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }
    
    } else if (cvalor == 'whizbang') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'whizbang'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'whizbang'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'whizbang'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'whizbang'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }

    } else if (cvalor == 'demon-hunter') {
        if (valorqtd == '0'){
            const parametRout = 'classes'
            const parametC = 'demon-hunter'
            sourch(parametRout, parametC, 0)
            console.log(cvalor)
        } else if (valorqtd == '30'){
            const parametRout = 'classes'
            const parametC = 'demon-hunter'
            sourch(parametRout, parametC, 30)
            console.log(cvalor)
        } else if (valorqtd == '60'){
            const parametRout = 'classes'
            const parametC = 'demon-hunter'
            sourch(parametRout, parametC, 60)
            console.log(cvalor)
        } else if (valorqtd == '90'){
            const parametRout = 'classes'
            const parametC = 'demon-hunter'
            sourch(parametRout, parametC, 90)
            console.log(cvalor)
        }
    }
}

async function sourch(parametRout, parametQ, pageSize){
    cards.innerHTML += ``
    const route = await fetch (`http://localhost:3000/${parametRout}/${parametQ}?pageSize=${pageSize}`)
    const list = await route.json()
    list.map((iten) => {
        if (iten.img){
            const boxcard =`
                <div class="card">
                    <img class='card-img' src='${iten.img}'>
                    <h4 class="card-name>${iten.name}</h4>
                </div>`

            cards.innerHTML += boxcard
        }   else {
                const boxcard = `
                            <div class="card">
                                    <img class="card-img" src="../App/img/carta-vazia.png" alt="image-empty">
                                    <h4 class="card-name">${iten.name}</h4>
                            </div>
                        `
                cards.innerHTML += boxcard
            }
    })
}

selected()