const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
 let newarray = array.find(function(s){ s.result==="W"})
 return newarray.year
}