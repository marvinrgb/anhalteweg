const pxPerM = 10

let num = 50;

function getBrakingWeg(v) {
  return (v / 10) * (v / 10);
}
function getReactionLength(v) {
  return (v / 10) * 3;
}

function calculate(v) {
  let reaction = document.getElementById('reaction');
  let braking = document.getElementById('braking');

  reaction.style.width = getReactionLength(v) * pxPerM + 'px';
  reaction.innerHTML = getReactionLength(v) * pxPerM + 'm';
  
  braking.style.width = getBrakingWeg(v) * pxPerM + 'px';
  braking.innerHTML = Math.round(getBrakingWeg(v) * pxPerM) + 'm';

}


document.getElementById('input-v').addEventListener('change', (event) => {
  calculate(event.target.value);
})