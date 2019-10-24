const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
 let newarray = array.find(function(s){return s.result==="W"})
 return newarray.year
}