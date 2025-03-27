import Character from "./character.mjs";
import Weapon from "./weapon.mjs";
import Armor from "./armor.mjs";

const globals = {

characters: [],
weapons: [],
armors: [],
equipment: [],
}

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
    const shadowplate       = new Armor("Shadowplate,", 28, 15);
    const phantomShroud     = new Armor("Phantom Shroud,", 22, 12);
    const titansBulkwark    = new Armor("Titans Bulkwark,", 35, 18);
    const sylvanGuardian    = new Armor("Sylvan Guardian,", 30, 14);
    const abyssalCarapace   = new Armor("Abyssal Carapace,", 25, 10)
    globals.armors.push(shadowplate, phantomShroud, titansBulkwark, sylvanGuardian, abyssalCarapace)

    console.log("Weapon list")
    console.log("-----------")
    for(let i = 0; i < globals.weapons.length; i++)
    {
        let weapon = globals.weapons[i];

        console.log(`${weapon.name}: Min Level = ${weapon.minLevel}, Damage = ${weapon.damage}, Durability = ${weapon.durability}`)
    }
    console.log("\nArmor List")
    console.log("-----------")
    for(let i = 0; i < globals.armors.length; i++)
        {
            let armor = globals.armors[i];
    
            console.log(`${armor.name}: Min Level = ${armor.minLevel}, Defense = ${armor.defense}`)
        } 
    
