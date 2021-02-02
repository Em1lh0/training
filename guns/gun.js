 export default class Gun {
    constructor({name, damage, speed, holder, reloadtime}) {
        this.name = name;
        this.damage = damage;
        this.speed = speed;
        this.holder = holder;
        this.reloadtime = reloadtime;
    }

    shoot() {
        console.log(`Нанесено ${this.damage} урона, осталось ${this.holder} патронов`)
    }

   reload() {
       console.log(`Перезаряжается ${this.reloadtime} секунды`)
   }

}


