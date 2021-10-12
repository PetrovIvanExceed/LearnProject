let array = [
  {name: 'someShit'},
  {name: 'someShit'},
  {name: 'notSomeShit'},
  {name: 'someShit'},
  {name:'Shit'}];
//const testFunction = (arr, val) => {
//		let count = arr.reduce((accum, object, index) => {
//      if(object.name !== val){
//        accum.push(object)
//      }
//      return accum
//    },[])
//	console.log(count)
//}

//testFunction(array, 'someShit')

const testFunction = (arr, val) => {

  let count = arr.map((currentElem, index) => {
    if(currentElem.name === val) {
      return (currentElem)
    }
    return null
  })
  console.log(count)
}

testFunction(array, 'someShit')
