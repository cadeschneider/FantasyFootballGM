import StorageObj from './Storage'
import LeagueObj from './Leagues'
import './css/style.css'
import PlayerObj from './Player'

export default class UI {

    //INITIALIZATION
    static loadHomepage() {
        UI.addLeagueButton()
        StorageObj.getOverview().getLeagues().forEach((league) => UI.newOverviewDisplay(league.getName()))


    }

    //INTERACTIVE FUNCTIONALITY

    static addLeagueButton() {
        let submitButton = document.querySelector('#submitLeague')
        submitButton.addEventListener('click', function() {
            const leagueName = document.getElementById("inptLeague").value

            UI.addToSideNav(UI.newOverviewDisplay(leagueName))
            StorageObj.addLeague(new LeagueObj(leagueName))
        })
    }

    static openLeagueButton(element,name) {
        element.addEventListener('click', function() {
            const mainBlock = document.querySelector('#mainBlock')
            mainBlock.innerHTML =''

            const roster = StorageObj.getOverview().getLeague(name).getRoster()
            const watching = StorageObj.getOverview().getLeague(name).getWatching()

            UI.newLeagueDisplay(`<h3>${name.toUpperCase()}</h3>`)
            UI.initLeagueButtons()
            UI.addPlayerButton(name)
            roster.forEach((player) => UI.newLeagueDisplay(player.getName()))
            watching.forEach((player) => UI.newLeagueDisplay(player.getName()))
        })

    }

    static addPlayerButton(league) {
        let submitButton = document.querySelector('#submitPlayer')
        submitButton.addEventListener('click', function() {
            const playerName = document.getElementById("inptPlayer").value
            const chkbxValue = document.getElementById("chkRostered")

            if (chkbxValue.checked) {
                StorageObj.addRosterPlayer(league, new PlayerObj(playerName))
            }else{
                StorageObj.addWatchingPlayer(league, new PlayerObj(playerName))
            }


            roster.forEach((player) => UI.newLeagueDisplay(player.getName()))
            watching.forEach((player) => UI.newLeagueDisplay(player.getName()))
        })
    }

    //VISUAL FUNCTIONALITY

    static initLeagueButtons() {
        const element = document.createElement('div');
        const inpt = document.createElement('input');
        const btn = document.createElement('button');
        const chkbx = document.createElement('input');
        inpt.id = "inptPlayer"
        btn.id = "submitPlayer"
        btn.innerHTML = "&plus;"
        chkbx.id = "chkRostered"
        chkbx.type = "checkbox"
        element.appendChild(inpt)
        element.appendChild(btn)
        element.appendChild(chkbx)
        element.className="addControls"

        return UI.addToMainBlock(element)
    }

    static newOverviewDisplay(name) {
        const element = document.createElement('div')
        element.innerHTML += name.toUpperCase()
        element.className= "lists"
        UI.openLeagueButton(element, name)
        return UI.addToSideNav(element)
    }

    static newLeagueDisplay(name) {
        const element = document.createElement('div')
        element.innerHTML += name
        element.className = "lists"
        

        return UI.addToMainBlock(element)
    }

    static addToSideNav(item){
        const nav = document.querySelector('#leagues')
        return nav.appendChild(item)

    }

    static addToMainBlock(item){
        const mainBlock = document.querySelector('#mainBlock')
        return mainBlock.appendChild(item)
    }

}