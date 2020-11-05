const fi = (function() {
  return {
    // libraryMethod: function() {
    //   return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    // },

    each: function(arr, alert) {
      for (let num in arr){
        alert(arr[num])
      }
      return arr
    },

    map: function(arr, f) {
      let newArr = [];
      for (let num in arr) {
        newArr.push(f(arr[num]))
      }
      return newArr;
    
   },

    reduce: function(collection, f, acc) {
      let array = Array.isArray(collection) ? [...collection] : Object.values(collection)
      let output = acc ? acc : array.shift()
      for (let i = 0; i < array.length; i++){
        output = f(output, array[i], array)
      
        // console.log(output, "OUTPUT")
      } 
      return output
    },

    find: function(c, p) {
      for (let num of c) {
        if (p(num)){
        return num
      }
    }
   },

   filter: function(c, p) {
     const newArray = []
    for (let num of c) {
      if (p(num)){
      newArray.push(num)
    }
  }
  return newArray
 },
 
 size: function(c) {
   let counter = 0
  for (let num in c) {
    counter++
  }
  return counter
},

first: function(array, n){ 
  return n ? array.slice(0, n) : array[0]
 },


 last: function(array, n){ 
    let start = array.length - n
    let end = array.length
  return n ? array.slice(start, end) : array[end-1]

 },






    functions: function() {

    },


  }
})()

fi.libraryMethod()
