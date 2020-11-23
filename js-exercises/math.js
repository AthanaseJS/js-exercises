function myRundom() {
  var y,
    x = Math.random() * 100
  return Math.round(x).toString()
}

function mySquare() {
  document.getElementById('outputSpace2').innerHTML =
    ' and square of 9 is ' + Math.sqrt(9)
}
function myComparison() {
  x = 10
  y = 5
  var res = x != y
  document.getElementById('outputSpace2').innerHTML = res
}
