import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from "./firebaseConfig";
import WaldoImage from "./images/gobblingGluttons.jpg";
import { clickTargetDisplay } from "./mouseFunctions";
import "./style.css";


// track found characters
let isWaldoFound = false;
let isWendaFound = false;
let isOdlawFound = false;
let isWizardFound = false;

// initialize db
const firebaseApp = initializeApp(getFirebaseConfig());
const db = getFirestore(firebaseApp);

// create image
function createImageDisplay() {
  const content = document.getElementById("content");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");

  // add click event handler
  imgDiv.addEventListener("click", clickTargetDisplay);

  const waldoImg = document.createElement("img");
  waldoImg.setAttribute("src", WaldoImage);

  imgDiv.appendChild(waldoImg);

  content.appendChild(imgDiv);
}

function createTargetDisplay() {
  const content = document.getElementById("content");

  const targetDiv = document.createElement("div");
  targetDiv.id = "targetDiv";
  targetDiv.style.left = "5000px";

  const targetBox = document.createElement("div");
  targetBox.id = "targetBox";

  const targetList = document.createElement("div");
  targetList.id = "targetList";

  // TODO show list based on whose been found
  const list = document.createElement("ul");

  if (!isWaldoFound) {
    const listWaldo = document.createElement("li");
    listWaldo.textContent = "Waldo";
    list.appendChild(listWaldo);
  }

  if (!isWendaFound) {
    const listWenda = document.createElement("li");
    listWenda.textContent = "Wenda";
    list.appendChild(listWenda);
  }

  if (!isOdlawFound) {
    const listOdlaw = document.createElement("li");
    listOdlaw.textContent = "Odlaw";
    list.appendChild(listOdlaw);
  }

  if (!isWizardFound) {
    const listWizard = document.createElement("li");
    listWizard.textContent = "Wizard";
    list.appendChild(listWizard);
  }

  // TODO list empty handler

  targetList.appendChild(list);

  targetDiv.appendChild(targetBox);
  targetDiv.appendChild(targetList);

  content.appendChild(targetDiv);
}

function refreshDisplayList() {
  const targetList = document.getElementById("targetList");
  const list = document.createElement("ul");

  // remove current list elements
  targetList.querySelector("ul").remove();

  if (!isWaldoFound) {
    const listWaldo = document.createElement("li");
    listWaldo.textContent = "Waldo";
    list.appendChild(listWaldo);
  }

  if (!isWendaFound) {
    const listWenda = document.createElement("li");
    listWenda.textContent = "Wenda";
    list.appendChild(listWenda);
  }

  if (!isOdlawFound) {
    const listOdlaw = document.createElement("li");
    listOdlaw.textContent = "Odlaw";
    list.appendChild(listOdlaw);
  }

  if (!isWizardFound) {
    const listWizard = document.createElement("li");
    listWizard.textContent = "Wizard";
    list.appendChild(listWizard);
  }

  targetList.appendChild(list);
}

export function setCharacterFound(character) {
  console.log(character);
  if (character == "Waldo") {
    isWaldoFound = true;
    refreshDisplayList();
  } else if (character == "Wenda") {
    isWendaFound = true;
  } else if (character == "Odlaw") {
    isOdlawFound = true;
  } else if (character == "Wizard") {
    isWizardFound = true;
  }
}

export function initializeWebsite() {
  createImageDisplay();
  createTargetDisplay();
}
