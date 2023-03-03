
const heroes = [
  {
      name: 'Slate Slabrock',
      type: 'dwarf',
      damage: 5,
      health: 100,
      maxHealth: 100,
      image: 'hero_001.png'
  },
  {
      name: 'Flint Ironstag',
      type: 'elf',
      damage: 10,
      health: 50,
      maxHealth: 50,
      image: 'hero_002.png'
  }
]


const boss = {
  health: 100,
  maxHealth: 100,
  damage: 5,
  level: 1,
  image: 'image_1.jpg'
}

// Global variables


// Click variables
function bossClick(){
  console.log('bossClick')
  let damage = 0
  heroes.forEach(h=> damage+= h.damage)
  boss.health -= damage
  if (boss.health < 0) {
    boss.health = 0
  }
  updateBoss()
  console.log(boss.health)
}

function bossAttack() {
  console.log('boss attack')
  let randomHero = Math.floor(Math.random() * heroes.length)
  heroes[randomHero].health -= boss.damage
  if (heroes[randomHero].health <= 0) heroes[randomHero].health = 0
  console.log(heroes[randomHero].name, heroes[randomHero].health)
  updateHero(heroes[randomHero].name)
}

function updateHero(name) {
  let hero = heroes.find(h=> h.name == name)
  let heroElem = document.getElementById(hero.name)
  let statsView = heroElem.querySelector('.heroHealth')
  statsView.innerText = `${hero.health}`
}

function updateBoss() {
  console.log('update boss')
  let bossElem = document.getElementById('monsterProgress')
  let statsView = bossElem.querySelector('.bossHealth')
  statsView.innerText = `${(boss.health/boss.maxHealth*100).toFixed(0)}`

  if (boss.health == 0){
    window.alert('Boss is critically wounded! Finish Him!')

  }
}



setInterval(bossAttack, 5000)

function heroClick(){
  console.log('heroClick')
}

function shopClick(){
  console.log('shopClick')
}

function reset(){
  console.log('reset')
  heroes.forEach(h => {
    h.health = h.maxHealth;
    updateHero(h.name)
  });
  boss.health = boss.maxHealth
  updateBoss()

}



// Draw functions

// Update functions




console.log('hello from javascript')