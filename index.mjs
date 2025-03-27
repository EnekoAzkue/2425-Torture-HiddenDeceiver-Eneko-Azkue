import Character from "./character.mjs";
import Weapon from "./weapon.mjs";
import Armor from "./armor.mjs";

const globals = {

characters: [],
weapons: [],
armors: [],
equipment: [],
}

    //Characters: level, age, stamina
    const ragnarWolfbane        = new Character(32, 45,  87);
    const seraphinaNightshade   = new Character(27, 120, 92);
    const thalgrimIronfist      = new Character(40, 52,  95);
    const lyaraMoonwhishper     = new Character(35, 29,  88);
    const dravenBlackthorn      = new Character(30, 37,  90);
    globals.characters.push(ragnarWolfbane, seraphinaNightshade, thalgrimIronfist, lyaraMoonwhishper, dravenBlackthorn)

    //Weapons: minLevel, damage, durability
    const stormbreakerAxe   = new Weapon(30, 25, 80);
    const celestalRapier    = new Weapon(25, 18, 75);
    const obsidianWarhammer = new Weapon(38, 30, 90);
    const starfireBow       = new Weapon(33, 22, 85);
    const doomfangDeagger   = new Weapon(28, 20, 78);
    globals.weapons.push(stormbreakerAxe, celestalRapier, obsidianWarhammer, starfireBow, doomfangDeagger)

    //Armors: minLevel, defense
    const shadowplate       = new Armor(28, 15);
    const phantomShroud     = new Armor(22, 12);
    const titansBulkwark    = new Armor(35, 18);
    const sylvanGuardian    = new Armor(30, 14);
    const AbyssalCarapace   = new Armor(25, 10)
    globals.armors.push(shadowplate, phantomShroud, titansBulkwark, sylvanGuardian, AbyssalCarapace)
