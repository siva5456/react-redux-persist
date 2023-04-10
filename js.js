const ages = [3, 10, 18, 20];

let a=ages.some(checkAdult);
function checkAdult(age) {
  return age == 18;
}
console.log(a);
let b=ages.every(checkAdult);
function checkAdult(age) {
  return age == 18;
}
console.log(b);