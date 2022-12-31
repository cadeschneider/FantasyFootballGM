export default class PlayerObj {
    constructor(name, position, number, team, Rostered){
        this.name = name;
        this.postion = position;
        this.number = number;
        this.team = team;
        this.Rostered = Rostered;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    getPosition(){
        return this.position
    }

    getTeam(){
        return this.team;
    }

    setRostered(Rostered) {
        this.Rostered = Rostered;
    }

    getRostered(){
        return this.Rostered
    }

}