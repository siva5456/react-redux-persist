const ages = [3, 10, 18, 20];

let a=ages.every(checkAdult);
function checkAdult(age) {
  return age !== 18;
}
console.log(a);