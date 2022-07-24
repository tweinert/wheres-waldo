import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from "./firebaseConfig";
import WaldoImage from "./images/gobblingGluttons.jpg";
import { clickTargetDisplay } from "./mouseFunctions";
import "./style.css";

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

  const person1 = document.createElement("li");
  person1.textContent = "Waldo";
  list.appendChild(person1);

  const person2 = document.createElement("li");
  person2.textContent = "Wenda";
  list.appendChild(person2);

  const person3 = document.createElement("li");
  person3.textContent = "Odlaw";
  list.appendChild(person3);

  const person4 = document.createElement("li");
  person4.textContent = "Wizard";
  list.appendChild(person4);

  targetList.appendChild(list);

  targetDiv.appendChild(targetBox);
  targetDiv.appendChild(targetList);

  content.appendChild(targetDiv);
}

export function initializeWebsite() {
  createImageDisplay();
  createTargetDisplay();
}
