// check the distance between two points
export function checkDistance(xA, yA, xB, yB, maxDistance) {
  let distance = Math.sqrt((xA - xB)**2 + (yA - yB)**2);
  return distance < maxDistance ? true : false;
}