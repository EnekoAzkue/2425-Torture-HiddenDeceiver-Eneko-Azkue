import Character from "./character.mjs";
import Weapon from "./weapon.mjs";
import Armor from "./armor.mjs";

const globals = {

characters: [],
weapons: [],
armors: [],
equipment: [],
}
    //Object creation
    //Characters: name, level, age, stamina
    const ragnarWolfbane        = new Character("Ragnar Wolfbane", 32, 45,  87);
    const seraphinaNightshade   = new Character("Seraphina Nightshade", 27, 120, 92);
    const thalgrimIronfist      = new Character("Thalgrim Ironfist", 40, 52,  95);
    const lyaraMoonwhishper     = new Character("Lyara Moonwhishper", 35, 29,  88);
    const dravenBlackthorn      = new Character("Draven Blackthorn", 30, 37,  90);
    globals.characters.push(ragnarWolfbane, seraphinaNightshade, thalgrimIronfist, lyaraMoonwhishper, dravenBlackthorn)

    //Weapons: minLevel, damage, durability
    const stormbreakerAxe   = new Weapon("Stormbreaker Axe", 30, 25, 80);
    const celestalRapier    = new Weapon("Celestal Rapier", 25, 18, 75);
    const obsidianWarhammer = new Weapon("Obsidian Warhammer", 38, 30, 90);
    const starfireBow       = new Weapon("Starfire Bow", 33, 22, 85);
    const doomfangDagger   = new Weapon("Doomfang Dagger", 28, 20, 78);
    globals.weapons.push(stormbreakerAxe, celestalRapier, obsidianWarhammer, starfireBow, doomfangDagger)

    //Armors: minLevel, defense
    const shadowplate       = new Armor("Shadowplate", 28, 15);
    const phantomShroud     = new Armor("Phantom Shroud", 22, 12);
    const titansBulkwark    = new Armor("Titans Bulkwark", 35, 18);
    const sylvanGuardian    = new Armor("Sylvan Guardian", 30, 14);
    const abyssalCarapace   = new Armor("Abyssal Carapace", 25, 10)
    globals.armors.push(shadowplate, phantomShroud, titansBulkwark, sylvanGuardian, abyssalCarapace)
    
    //Equip inventory
    // for(let i = 0; i < globals.characters.length; i++)
    //     {
    //         let character = globals.characters[i];
    //         let weapon = globals.weapons[i];
    //         let armor = globals.armors[i]
    
    
    //         character.equipInventory(weapon);
    //         character.equipInventory(armor);
    //     }

    // //Print weapon and armor list
    // console.log("WEAPON LIST")
    // console.log("-----------")
    // for(let i = 0; i < globals.weapons.length; i++)
    // {
    //     let weapon = globals.weapons[i];

    //     console.log(`${weapon.name}: Min Level = ${weapon.minLevel}, Damage = ${weapon.damage}, Durability = ${weapon.durability}`)
    // }
    // console.log("\nARMOR LIST")
    // console.log("-----------")
    // for(let i = 0; i < globals.armors.length; i++)
    // {
    //     let armor = globals.armors[i];

    //     console.log(`${armor.name}: Min Level = ${armor.minLevel}, Defense = ${armor.defense}`)
    // } 
    
    // //Print character list
    // console.log("\nCHARACTER LIST")
    // console.log("----------------\n")
    // for(let i = 0; i < globals.characters.length; i++)
    // {
    //     let character = globals.characters[i];
    //     let equipment = character.equipmentArray;
    //     let weapon = equipment[0];
    //     let armor = equipment[1];
    //     //Print name
    //     console.log(character.name)
    //     console.log("----------------\n")

    //     //Print attributes
    //     console.log("Attributes:")
    //     console.log("----------------")
    //     console.log(`Level: ${character.level}\nAge: ${character.age}\nStamina: ${character.stamina}`)
    //     console.log("----------------")


    //     //Print inventory
    //     console.log("Weapons:")
    //     console.log("----------------")
    //     console.log(`Name: ${weapon.name}\nMin Level: ${weapon.minLevel}\nDamage: ${weapon.damage}\nDurability: ${weapon.durability}`)
    //     console.log("----------------")
    //     console.log("Armors:")
    //     console.log("----------------")
    //     console.log(`Name: ${armor.name}\nMin Level: ${armor.minLevel}\nDefense: ${armor.defense}`)
    //     console.log("----------------")
    // }

    //Print armor lvl < 30 list
    // console.log("ARMOR LVL < 30 LIST")
    // console.log("----------------")
    // for(let i = 0; i < globals.characters.length; i++)
    // {
    //     let armor = globals.characters[i].equipmentArray[1]

    //     if(armor.minLevel < 30)
    //     {
    //         console.log(`Name: ${armor.name}\nMin Level: ${armor.minLevel}`)
    //         console.log("----------------")
    //     }
    // }

    //Equip all the weapons that the caracter can use
    for(let i = 0; i < globals.characters.length; i++)
    {
        let character = globals.characters[i]
        let weapons = [];
        // console.log(`Name: ${character.name}\nLevel: ${character.level}`)
        // console.log("----------------")
        for(let j = 0; j < globals.weapons.length; j++)
        {

            let weapon = globals.weapons[j]
            if( weapon.minLevel <= character.level)
            {
                // console.log(`Name: ${weapon.name}\nMin Level: ${weapon.minLevel}\n`)
                weapons.push(weapon);

            }

        }
        // console.log("----------------")
        character.equipInventory(weapons);
        let armor = globals.armors[i]
        character.equipInventory(armor)
    }
    let character = globals.characters[0]
    console.log(character)
    let random = Math.floor(Math.random() * (character.equipmentArray[0].length));
    let weapon = character.equipmentArray[0][random]
    let armor = character.equipmentArray[1]

    console.log(weapon)


    
    console.log("BEFORE")
    console.log("defense")
    console.log(character.equipmentArray[1].defense)
    console.log("stamina")
    console.log(character.stamina)
    console.log("durability")
    console.log(weapon.durability)
    

    let fumble = globals.characters[0].fumble(character,random)

    if(fumble)
    {
    console.log("\nAFTER")
    console.log("defense")
    console.log(character.equipmentArray[1].defense)
    console.log("stamina")
    console.log(character.stamina)
    console.log("durability")
    console.log(weapon.durability)
    }
        
export { globals }