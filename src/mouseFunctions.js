import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getFirebaseConfig } from "./firebaseConfig";

export async function clickTargetDisplay(e) {
  // coords of click
  let xPos = e.clientX;
  let yPos = e.clientY;
  console.log(`${xPos}, ${yPos}`);

  const targetDisplay = document.getElementById("targetDiv");
  targetDisplay.parentNode.appendChild(targetDisplay);
  targetDisplay.style.left = xPos - 50 + "px";
  targetDisplay.style.top = yPos - 50 + "px";

  checkCharacterClick();

  setTimeout(() => {
    targetDisplay.style.left = "5000px";
  }, 3000);
}

async function checkCharacterClick() {
  /*
  use helperFunctions.checkDistance to see
  if click is near any of the character locations in the database  
  */
  // TODO get locations from firebase database
  // collection(locations) - document(waldo, wenda, odlaw, wizard) - fields(xPos, yPos)
  const firebaseApp = initializeApp(getFirebaseConfig());
  const db = getFirestore(firebaseApp);

  const colRef = collection(db, "locations");
  const docsSnap = await getDocs(colRef);

  docsSnap.forEach(doc => {
    console.log(doc.data());
  });
  
  // TODO check click distance for each character location
}