import StorageObj from './Storage'
import LeagueObj from './Leagues'
import './css/style.css'
import PlayerObj from './Player'

export default class UI {

    //INITIALIZATION
    static loadHomepage() {
        UI.createBanner()
        UI.createMain()
        UI.createSideNav()
        UI.createMainBlock()
        UI.initOverviewButtons()
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
            const main = document.querySelector('#mainBlock')
            main.innerHTML =''
            const roster = StorageObj.getOverview().getLeague(name).getRoster()
            const watching = StorageObj.getOverview().getLeague(name).getWatching()

            UI.newLeagueDisplay(name)
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

            UI.addToMain(UI.newLeagueDisplay(playerName))
        })
    }

    //VISUAL FUNCTIONALITY

    static createBanner(){
        const header = document.createElement('header')
        const titleblock = document.createElement('div')
        const title = document.createElement('h1')
        title.textContent = "FANTASY FOOTBALL GM"
        titleblock.appendChild(title)
        header.appendChild(titleblock)

        const footer = document.createElement('footer')
        const footerblock = document.createElement('div')
        footerblock.textContent= 'Created by Cade Sixkiller Schneider'
        footer.appendChild(footerblock)

        return document.body.append(header, footer)

    }

    static createSideNav(){
        const nav = document.createElement('nav')
        const main= document.querySelector('main')
        return main.appendChild(nav)

    }

    static createMain(){
        const main = document.createElement('main')
        return document.body.appendChild(main)
    }

    static createMainBlock(){
        const mainBlock = document.createElement('div')
        mainBlock.id = "mainBlock"
        const main = document.querySelector('main')
        return main.appendChild(mainBlock)
    }

    static initOverviewButtons() {
        const element = document.createElement('div');
        const inpt = document.createElement('input');
        const btn = document.createElement('button');
        inpt.id = "inptLeague"
        btn.id = "submitLeague"
        element.appendChild(inpt)
        element.appendChild(btn)

        return UI.addToSideNav(element)
    }

    static initLeagueButtons() {
        const element = document.createElement('div');
        const inpt = document.createElement('input');
        const btn = document.createElement('button');
        const chkbx = document.createElement('input');
        inpt.id = "inptPlayer"
        btn.id = "submitPlayer"
        chkbx.id = "chkRostered"
        chkbx.type = "checkbox"
        element.appendChild(inpt)
        element.appendChild(btn)
        element.appendChild(chkbx)

        return UI.addToMainBlock(element)
    }

    static newOverviewDisplay(name) {
        const element = document.createElement('div')
        element.innerHTML += name
        this.openLeagueButton(element, name)
        return UI.addToSideNav(element)
    }

    static newLeagueDisplay(name) {
        const element = document.createElement('div')
        element.innerHTML += name

        return UI.addToMainBlock(element)
    }

    static addToSideNav(item){
        const nav = document.querySelector('nav')
        return nav.appendChild(item)

    }

    static addToMainBlock(item){
        const mainBlock = document.querySelector('#mainBlock')
        return mainBlock.appendChild(item)
    }

}