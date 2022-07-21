import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from "./firebaseConfig";
import WaldoImage from "./images/gobblingGluttons.jpg";
import './style.css';


// initialize db
const firebaseApp = initializeApp(getFirebaseConfig());
const db = getFirestore(firebaseApp);

// create image
function createInitialDisplay() {
  const content = document.getElementById("content");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");
  
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
  targetDiv.setAttribute("position", "absolute");

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

function toggleTargetDisplay() {
  // set display: absolute on click.
  // set position to click position
  // set display none after timer ends

}

createInitialDisplay();
createTargetDisplay();

