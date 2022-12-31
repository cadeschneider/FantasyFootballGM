
export default class OverviewObj {
    constructor() {
        this.leagues = []
    }

    setLeagues(leagues) {
        this.leagues = leagues
    }

    getLeagues() {
        return this.leagues
    }

    getLeague(leagueName) {
        return this.leagues.find((league) => league.getName() === leagueName)
    }

    contains(leagueName) {
        return this.leagues.some((league) => league.getName() === leagueName)
    }

    addLeague(leagueName) {

        if (this.leagues.find((league) => league.getName() === leagueName.name))
            return 
        this.leagues.push(leagueName); 
        
    }

    deleteLeague(leagueName) {
        const leagueToDelete = this.leagues.find((league) => league.getName() === leagueName)
        this.leagues.splice(this.leagues.indexOf(leagueToDelete),1)
    }


}