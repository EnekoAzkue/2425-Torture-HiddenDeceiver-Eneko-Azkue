export default class Armor {
    constructor(name, minLevel, defense)
    {
        this.name = name,
        this.minLevel = minLevel,
        this.defense = defense
    }

    showAttributes()
    {
        console.log(`${this.name}: Min Level = ${this.minLevel}, Defense = ${this.defense}`)    
    }
}