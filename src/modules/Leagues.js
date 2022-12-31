export default class LeagueObj {
    constructor(name) {
        this.name = name;
        this.roster = [];
        this.watching = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }

    setRoster(roster) {
        this.roster = roster;
    }

    getRoster() {
        return this.roster
    }

    setWatching(watching) {
        this.watching = watching;
    }

    getWatching() {
        return this.watching
    }

    getPlayerRoster(playerName) {
        return this.roster.find((player) => player.getName() === playerName)

    }

    getPlayerWatching(playerName) {
        return this.watching.find((player) => player.getName() === playerName)

    }

    contains(playerName) {
        if (this.roster.some((player) => this.roster.getName() === playerName) || this.watching.some((player) => this.watching.getName() === playerName)) {
            return true;
        } else {
            return false;
        }
    }

    addRosterPlayer(newPlayer) {
        if (this.roster.find((player) => player.name === newPlayer.name))
            return 
        this.roster.push(newPlayer)
    }


    addWatchingPlayer(newPlayer) {
        if (this.watching.find((player) => player.name === newPlayer.name))
            return 
        this.watching.push(newPlayer)
    }

    deletePlayerRoster(playerName) {
        const playerToDelete = this.roster.find((player) => player.getName() === playerName)
        this.roster.splice(this.roster.indexOf(playerToDelete),1)
    }

    deletePlayerWatching(playerName) {
        const playerToDelete = this.watching.find((player) => player.getName() === playerName)
        this.watching.splice(this.watching.indexOf(playerToDelete),1)
    }

}