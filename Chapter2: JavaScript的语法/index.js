// var str = 'this is a test'
// console.log(typeof str); // string

// console.log(typeof (str)) // string;

// console.log(typeof 'test!'); // string、

// ----
var str = 'abcde'
var obj = new String(str)


function newToString() {
  return 'hello world'
}

function func(val) {
  val.toString = newToString
}

func(str)
console.log(str); //abcde


func(obj)
console.log(String(obj)); // hello world

