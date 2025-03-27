export default class Character {
    constructor(level, age, stamina)
    {
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