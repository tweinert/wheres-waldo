export function clickTargetDisplay(e) {
  // coords of click
  let xPos = e.clientX;
  let yPos = e.clientY;

  const targetDisplay = document.getElementById("targetDiv");
  targetDisplay.parentNode.appendChild(targetDisplay);
  targetDisplay.style.left = xPos - 50 + "px";
  targetDisplay.style.top = yPos - 50 + "px";
}