export default class Character {
    constructor(name, level, age, stamina)
    {
        this.name = name,
        this.level = level,
        this.age = age,
        this.stamina = stamina,
        this.equipmentArray = []
    }

    equipInventory(equipment)
    {
        this.equipmentArray.push(equipment)
    }

    fumble(character,random)
    {

        let weapon = character.equipmentArray[0][random]
        let totalDamage = Math.ceil((weapon.damage + character.level)/4) 

        console.log("\nTDamage")
        console.log(totalDamage)
        character.equipmentArray[1].defense -= totalDamage;
        character.stamina -= 5

        character.equipmentArray[0][random].durability = character.equipmentArray[0][random].durability - 2
        let isFumbleDone = true
        return isFumbleDone;
    }
}