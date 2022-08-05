import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getFirebaseConfig } from "./firebaseConfig";
import { checkDistance } from "./helperFunctions";
import { setCharacterFound } from "./ui";

export async function clickTargetDisplay(e) {
  // coords of click
  let xPos = e.clientX;
  let yPos = e.clientY;
  console.log(`${xPos}, ${yPos}`);

  const targetDisplay = document.getElementById("targetDiv");
  targetDisplay.parentNode.appendChild(targetDisplay);
  targetDisplay.style.left = xPos - 50 + "px";
  targetDisplay.style.top = yPos - 50 + "px";

  getCharacterData(xPos, yPos);

  setTimeout(() => {
    targetDisplay.style.left = "5000px";
  }, 3000);
}

async function getCharacterData(xPos, yPos) {
  /*
  use helperFunctions.checkDistance to see
  if click is near any of the character locations in the database  
  */
  const firebaseApp = initializeApp(getFirebaseConfig());
  const db = getFirestore(firebaseApp);

  const colRef = collection(db, "locations");
  const docsSnap = await getDocs(colRef);

  docsSnap.forEach((doc) => {
    checkCharacterClick(xPos, yPos, doc);
  });
}

function checkCharacterClick(xPos, yPos, doc) {
  // TODO place markers
  // TODO track characters found

  let charX = doc.get("xPos");
  let charY = doc.get("yPos");

  if (doc.id == "waldo") {
    if (checkDistance(xPos, yPos, charX, charY, 30)) {
      console.log("Waldo Clicked");
      setCharacterFound("Waldo");
      createMarker(charX, charY);
    }
  }
  if (doc.id == "wenda") {
    if (checkDistance(xPos, yPos, charX, charY, 30)) {
      console.log("Wenda Clicked");
      setCharacterFound("Wenda");
      createMarker(charX, charY);
    }
  }
  if (doc.id == "odlaw") {
    if (checkDistance(xPos, yPos, charX, charY, 30)) {
      console.log("Odlaw Clicked");
      setCharacterFound("Odlaw");
      createMarker(charX, charY);
    }
  }
  if (doc.id == "wizard") {
    if (checkDistance(xPos, yPos, charX, charY, 30)) {
      console.log("Wizard Clicked");
      setCharacterFound("Wizard");
      createMarker(charX, charY);
    }
  }
}

function createMarker(xPos, yPos) {
  let marker = document.createElement("span");

  marker.classList.add("marker");

  marker.style.left = `${xPos - 25}px`;
  marker.style.top = `${yPos - 25}px`;

  const content = document.getElementById("content");
  content.appendChild(marker);
}
