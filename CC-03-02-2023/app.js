// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


var capitals = function (word) {

  let arr = []
  word.split('').forEach((element, index) => {
    if(element === element.toUpperCase()){
      arr.push(index)
    }
  })
  return arr
};