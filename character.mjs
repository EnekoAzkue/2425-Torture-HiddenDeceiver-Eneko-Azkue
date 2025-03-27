import { globals } from "./index.mjs"

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

    showAttributes()
    {

        let equipment = this.equipmentArray;
        let weapon = equipment[0];
        let armor = equipment[1];
        //Print name
        console.log(this.name)
        console.log("----------------\n")

        //Print attributes
        console.log("Attributes:")
        console.log("----------------")
        console.log(`Level: ${this.level}\nAge: ${this.age}\nStamina: ${this.stamina}`)
        console.log("----------------")


        //Print inventory
        console.log("Weapons:")
        console.log("----------------")
        console.log(`Name: ${weapon.name}\nMin Level: ${weapon.minLevel}\nDamage: ${weapon.damage}\nDurability: ${weapon.durability}`)
        console.log("----------------")
        console.log("Armors:")
        console.log("----------------")
        console.log(`Name: ${armor.name}\nMin Level: ${armor.minLevel}\nDefense: ${armor.defense}`)
        console.log("----------------") 
    }

    showLessThanLvl30Armor()
    {
        let armor = this.equipmentArray[1]

        if(armor.minLevel < 30)
        {
            console.log(`Name: ${armor.name}\nMin Level: ${armor.minLevel}`)
            console.log("----------------")
        }
    }

    equipAvailableWeapons()
    {
        let weapons = [];
        console.log(`Name: ${this.name}\nLevel: ${this.level}`)
        console.log("----------------")
        for(let j = 0; j < globals.weapons.length; j++)
        {

            let weapon = globals.weapons[j]
            if( weapon.minLevel <= this.level)
            {
                console.log(`Name: ${weapon.name}\nMin Level: ${weapon.minLevel}\n`)
                weapons.push(weapon);

            }

        }
        console.log("----------------")
        this.equipInventory(weapons);
    }
}