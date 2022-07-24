export async function clickTargetDisplay(e) {
  // coords of click
  let xPos = e.clientX;
  let yPos = e.clientY;
  console.log(`${xPos}, ${yPos}`);

  const targetDisplay = document.getElementById("targetDiv");
  targetDisplay.parentNode.appendChild(targetDisplay);
  targetDisplay.style.left = xPos - 50 + "px";
  targetDisplay.style.top = yPos - 50 + "px";

  setTimeout(() => {
    targetDisplay.style.left = "5000px";
    console.log("timer started");
  }, 3000);
}
