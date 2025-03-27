export default class Character {
    constructor(name, level, age, stamina)
    {
        this.name = name,
        this.level = level,
        this.age = age,
        this.stamina = stamina,
        this.equipmentArray = null
    }

    equipInventory(equipmentArray)
    {
        this.equipmentArray = equipmentArray
    }
}