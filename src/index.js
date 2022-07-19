import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFirebaseConfig } from "./firebaseConfig";
import WaldoImage from "./images/gobblingGluttons.jpg";
import './style.css';


// initialize db
const firebaseApp = initializeApp(getFirebaseConfig());
const db = getFirestore(firebaseApp);

// create image
function CreateInitialDisplay() {
  const content = document.getElementById("content");

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");
  
  const waldoImg = document.createElement("img");
  waldoImg.setAttribute("src", WaldoImage);
  
  imgDiv.appendChild(waldoImg);
  
  content.appendChild(imgDiv);
}

function toggleTargetDisplay() {
  const content = document.getElementById("content");

  const targetDiv = document.createElement("div");
  targetDiv.id = "targetDiv";

  const targetBox = document.createElement("div");
  targetBox.id = "targetBox";

  const targetList = document.createElement("div");
  targetList.id = "targetList";
  // TODO list of people to find

  targetDiv.appendChild(targetBox);
  targetDiv.appendChild(targetList);

  content.appendChild(targetDiv);
}

CreateInitialDisplay();
toggleTargetDisplay();

