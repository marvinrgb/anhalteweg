const pxPerM = 10
document.getElementById('fussball').style.width = 105 * pxPerM + 'px'

let num = 50;

function getBrakingWeg(v) {
  return (((v / 10) * (v / 10)) / 2);
}
function getReactionLength(v) {
  return (v / 10) * 3;
}

function calculate(v) {
  let reaction = document.getElementById('reaction');
  let braking = document.getElementById('braking');
  let anhalteweg = getBrakingWeg(v) + getReactionLength(v);

  reaction.style.width = getReactionLength(v) * pxPerM + 'px';
  reaction.innerHTML = (Math.round(getReactionLength(v) * 10) / 10) + 'm';
  console.log(getBrakingWeg(v))
  braking.style.width = getBrakingWeg(v) * pxPerM + 'px';
  braking.innerHTML = (Math.round(getBrakingWeg(v) * 10) / 10) + 'm';

  let carcon = document.getElementById('car-con');
  carcon.innerHTML = '';
  let car = document.createElement('img');
  car.src = 'https://static.vecteezy.com/system/resources/thumbnails/016/475/159/small_2x/red-suv-free-vector.jpg';
  car.classList.add('car')
  car.style.width = 4.5 * pxPerM + 'px'

  for (let i = 0; i < anhalteweg; i += 4.5) {
    carcon.appendChild(car.cloneNode(true))
  }

}


let carcon = document.getElementById('car-con');
carcon.innerHTML = '';
let car = document.createElement('img');
car.src = 'https://static.vecteezy.com/system/resources/thumbnails/016/475/159/small_2x/red-suv-free-vector.jpg';
car.classList.add('car')
car.style.width = 4.5 * pxPerM + 'px'
carcon.appendChild(car)

document.getElementById('input-v').addEventListener('change', (event) => {
  calculate(event.target.value);
})