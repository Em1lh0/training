// ОРУЖИЕ
class Gun {
    constructor({name, damage, speed, holder, reloadtime}) {
        this.name = name;
        this.damage = damage;
        this.speed = speed;
        this.holder = holder;
        this.reloadtime = reloadtime;
    }

    shoot(n) {
        if (n>`${this.holder}`){
            return console.log("Слишком много")
        }

        console.log(`Нанесено ${this.damage*n} урона, осталось ${this.holder-n} патронов`)
       
    }

    reload() {
       console.log(`Еще ${this.reloadtime} секунды`)
        setTimeout(()=> alert("Перезаряжен!"),  `${this.reloadtime}`)
   }

}
// ПИСТОЛЕТЫ
class Pistol extends Gun {
    
    constructor({name, damage, speed, holder, reloadtime}) {
        super({name, damage, speed, holder, reloadtime})
    }
 
}    

// Глок
class Glock extends Pistol {}
const glock = new Glock ({
    name: "Glock",
    damage: 31,
    speed: 400,
    holder: 20,
    reloadtime: 2
})

// юсп
class  Usp extends Pistol {}
const usp = new Usp ({
    name: "USP",
    damage: 40,
    speed: 300,
    holder: 12,
    reloadtime: 3
})

// ЧЕЛОВЕК
class Human {
    constructor({health}) {
    this.health = health
    }
}

// террористы
class T extends Human {}
const t = new T ({
    health: 100
})
  
// спецназ
class CT extends Human {}
const ct = new CT ({
    health: 100
})
  
// PROVERKA GIT