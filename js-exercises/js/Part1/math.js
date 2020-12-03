function myRundom() {
  var x = Math.round(Math.random() * 100)
  document.getElementById('demo1').innerHTML =
    'random number is -  ' + x.toString()
}
function myComparison() {
  x = 10
  y = 5
  var res = x != y
  document.getElementById('demo3').innerHTML = res
}
function myFunction() {
  var n = document.getElementById('myNumber').value
  return n
}
