function myRundom() {
  var x = Math.round(Math.random() * 100)
  document.getElementById('demo1').innerHTML =
    'random number is -  ' + x.toString()
}

function mySquare() {
  document.getElementById('demo2').innerHTML =
    ' and square of 9 is ' + Math.sqrt(9)
}
function myComparison() {
  x = 10
  y = 5
  var res = x != y
  document.getElementById('demo3').innerHTML = res
}
