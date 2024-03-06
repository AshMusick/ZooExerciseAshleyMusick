
import animals from "./zooService.js";
import { ERROR_URL_FORMAT_MISMATCH } from '../errorHandler.js'

const actionText = document.getElementById('actionText');
const speakInput = document.getElementById('speakText');
const sendButton = document.getElementById("sendButton");
const speakInputContainer = document.getElementById('speakTextContainer');
const editButton = document.getElementById("editButton");
const animalImage = document.getElementById("animalImage");

export function showAnimal(animal) {
    animalImage.setAttribute("src", `/assets/${animal}.svg`);
    animalImage.setAttribute("alt", `Image of ${animal}`);
}

export function showGiraffFairy() {
    animalImage.setAttribute("src", "/assets/giraffe-fairy.svg");
    animalImage.setAttribute("alt", "Cartoon fairy giraffe");
}

export function showGiraffNerd() {
    animalImage.setAttribute("src", "/assets/giraffe-nerd.svg");
    animalImage.setAttribute("alt", "Cartoon nerd giraffe");
}

export function animalActs(data) {
    animals.setState(data);
    hideSpeakInput();
    actionText.innerText = animals[data.animal][data.action](null, showSpeakInput);
}

export function hideAnimal() {
    actionText.innerText = null;
    hideSpeakInput();
    hideEditButton();
}

export function addZooEventListeners() {
    sendButton.addEventListener("click", sendSpeakInput);
    speakInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendSpeakInput();
        }
    });
    editButton.addEventListener("click", showSpeakInput);
}

export function inviteUserInput (error = false) {
    actionText.innerText = `${error ? 'Oops! ' + ERROR_URL_FORMAT_MISMATCH : ''} Select an animal and an action.`;
    showGiraffFairy();
}

function showSpeakInput() {
    actionText.innerText = null;
    speakInputContainer.classList.remove('hidden');
    hideEditButton();
}

function hideSpeakInput(canEdit = false) {
    speakInputContainer.classList.add("hidden");
    speakInput.value = "";
    if(canEdit) {
        editButton.classList.remove("hidden")
    }
}

function hideEditButton(){
    editButton.classList.add("hidden")
}

function sendSpeakInput() {
    const canEdit = true;
    const message = speakInput.value;
    hideSpeakInput(canEdit);
    speakInput.value = "";
    const data = animals.state;
    actionText.innerText = animals[data.animal][data.action](message);
}
    