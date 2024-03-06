import { isParsePath } from "../parse/parseService.js";

const animalLinksArray = [...document.getElementsByClassName("animal-link")];
const actionLinksArray = [...document.getElementsByClassName("action-link")];
const navbarLinksArray = [...document.getElementsByClassName("navbar-link")];

export function addMenuActionEventListeners() {

    animalLinksArray.forEach( (el) => { el.addEventListener("click", function() {
            selectAnimal(el.id.replace(/-link$/, ""));
        })
    });    

    actionLinksArray.forEach( (el) => { el.addEventListener("click", function() {
            selectAction(el.id.replace(/-link$/, ""));
        })
    });
}

export function selectAnimal (animal) {
    if(!animal) return;
    animalLinksArray.forEach(el => el.classList.remove("selected"));
    actionLinksArray.forEach(el => el.setAttribute("href", `${isParsePath() ? '/parse' : ''}/${animal}/${el.id.replace(/-link$/, "")}`))
    document.getElementById(`${animal}-link`).classList.add("selected");
}

export function selectAction (action) {
    if(!action) return;
    actionLinksArray.forEach(el => el.classList.remove("selected"));
    animalLinksArray.forEach(el => el.setAttribute("href", `${isParsePath() ? '/parse' : ''}/${el.id.replace(/-link$/, "")}/${action}`))
    document.getElementById(`${action}-link`).classList.add("selected");
}

export function selectNavbarOption(id) {
    navbarLinksArray.forEach(el => el.classList.remove("selected"));
    document.getElementById(id).classList.add("selected");
}