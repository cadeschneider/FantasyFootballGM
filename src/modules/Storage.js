import PlayerObj from './Player'
import OverviewObj from './Overview'
import LeagueObj from './Leagues'

export default class Storage {
    static saveOverview(data) {
        localStorage.setItem('Overview', JSON.stringify(data))
    }

    static getOverview() {
        const Overview = Object.assign(new OverviewObj(), JSON.parse(localStorage.getItem('Overview')))
    
        Overview.setLeagues(Overview.getLeagues().map((league) => Object.assign(new LeagueObj(),league)))

        Overview.getLeagues().forEach((league) => league.setRoster(league.getRoster().map((player) => Object.assign(new PlayerObj(), player))))
        Overview.getLeagues().forEach((league) => league.setWatching(league.getWatching().map((player) => Object.assign(new PlayerObj(), player))))

        return Overview
    }

    static addLeague(league){
        const Overview = Storage.getOverview()
        Overview.addLeague(league)
        Storage.saveOverview(Overview)
    }

    static deleteLeague(league){
        const Overview = Storage.getOverview()
        Overview.deleteLeague(league)
        Storage.saveOverview(Overview)
    }

    static addRosterPlayer(league, name){
        const Overview = Storage.getOverview()
        Overview.getLeague(league).addRosterPlayer(name)
        Storage.saveOverview(Overview)
    }

    static addWatchingPlayer(league, name){
        const Overview = Storage.getOverview()
        Overview.getLeague(league).addWatchingPlayer(name)
        Storage.saveOverview(Overview)
    }

    static deletePlayerRoster(league, name) {
        const Overview = Storage.getOverview()
        Overview.getLeague(league).deletePlayerRoster(name)
        Storage.saveOverview(Overview)
    }

    static deletePlayerWatching(league, name) {
        const Overview = Storage.getOverview()
        Overview.getLeague(league).deletePlayerWatching(name)
        Storage.saveOverview(Overview)
    }

}