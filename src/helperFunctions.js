// check the distance between two points
export function checkDistance(xA, yA, xB, yB, maxDistance) {
  let distance = Math.sqrt((xA - xB)**2 + (yA - yB)**2);
  return distance < maxDistance ? true : false;
}

export function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}