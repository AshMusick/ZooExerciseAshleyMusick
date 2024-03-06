import { addMenuActionEventListeners, selectNavbarOption } from "./menu/menuController.js";
import { getDataForFirstMatchingRoute } from './routes.js';
import { isParsePath } from "./parse/parseService.js";
import { selectAction, selectAnimal } from "./menu/menuController.js";
import { addZooEventListeners, animalActs, hideAnimal, inviteUserInput, showAnimal, showGiraffNerd } from "./zoo/zooController.js";
import { hideData, showData } from "./parse/parseController.js";

export function renderContentForPath() {
    const isPathForParse = isParsePath();
    const data = getDataForFirstMatchingRoute(isPathForParse);

    if(Object.keys(data).length === 0) {
        inviteUserInput();
    } else if (data.nomatch) {
        const error = true;
        inviteUserInput(error);
    } else {
        renderMainContent(data, isPathForParse);
    }

    renderNavbarContent(isPathForParse);
}

function renderMainContent(data, isParsePath) {
    if(isParsePath) {
        showData(data);
        hideAnimal();
        showGiraffNerd();
    } else {
        hideData();
        animalActs(data);
        showAnimal(data.animal);
    }
    selectAction(data.action);
    selectAnimal(data.animal);
}

function renderNavbarContent(isParsePath) {
    if(isParsePath) {
        selectNavbarOption('parse');
    } else {
        selectNavbarOption('zoo');
    }
}


addMenuActionEventListeners();
addZooEventListeners();
renderContentForPath();
window.addEventListener('popstate', renderContentForPath);

