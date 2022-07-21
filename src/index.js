import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from "./firebaseConfig";
import WaldoImage from "./images/gobblingGluttons.jpg";
import "./style.css";

// initialize db
const firebaseApp = initializeApp(getFirebaseConfig());
const db = getFirestore(firebaseApp);

// create image
function createInitialDisplay() {
  const content = document.getElementById("content");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");

  // add click event handler
  imgDiv.addEventListener("click", toggleTargetDisplay);

  const waldoImg = document.createElement("img");
  waldoImg.setAttribute("src", WaldoImage);

  imgDiv.appendChild(waldoImg);

  content.appendChild(imgDiv);
}

function createTargetDisplay() {
  const content = document.getElementById("content");

  const targetDiv = document.createElement("div");
  targetDiv.id = "targetDiv";
  // TODO hide display initially

  const targetBox = document.createElement("div");
  targetBox.id = "targetBox";

  const targetList = document.createElement("div");
  targetList.id = "targetList";
  // TODO list of people to find
  const list = document.createElement("ul");
  const person1 = document.createElement("li");
  person1.textContent = "Waldo";
  const person2 = document.createElement("li");
  person2.textContent = "Wizard";
  list.appendChild(person1);
  list.appendChild(person2);
  targetList.appendChild(list);

  targetDiv.appendChild(targetBox);
  targetDiv.appendChild(targetList);

  content.appendChild(targetDiv);
}

function toggleTargetDisplay(e) {
  // coords of click
  xPos = e.clientX;
  yPos = e.clientY;

  const targetDisplay = document.getElementById("targetDiv");
  targetDisplay.parentNode.appendChild(targetDisplay);
  targetDisplay.style.left = xPos - 50 + "px";
  targetDisplay.style.top = yPos - 50 + "px";
}

createInitialDisplay();
createTargetDisplay();
